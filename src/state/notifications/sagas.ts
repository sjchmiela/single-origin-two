import * as Notifications from 'expo-notifications';
import { call, put, takeLatest } from 'redux-saga/effects';

import { reminderCancelled, reminderDenied, reminderRequested } from './actions';

// Set up the notification handler
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

function* scheduleNotification({ timestamp }: { timestamp: number }) {
  const content = {
    title: 'Taste your coffee.',
    body: `Tap here to rate your brew.`,
    data: { timestamp },
  };

  const trigger = {
    seconds: 6 * 60, // 6 minutes after the reminder is requested
  };

  yield call(Notifications.cancelAllScheduledNotificationsAsync);
  yield call(Notifications.scheduleNotificationAsync, { content, trigger });
}

function* cancelAllNotifications() {
  yield call(Notifications.cancelAllScheduledNotificationsAsync);
}

function* handleReminderRequested({
  payload: { timestamp },
}: {
  payload: { timestamp: number };
}): any {
  try {
    const { status } = yield call(Notifications.getPermissionsAsync);

    if (status !== 'granted') {
      const { status: newStatus } = yield call(Notifications.requestPermissionsAsync);

      if (newStatus !== 'granted') {
        return yield put(reminderDenied());
      }
    }

    yield call(scheduleNotification, { timestamp });
    console.log('Reminder requested', timestamp);
  } catch (error) {
    console.error('Error scheduling notification:', error);
    yield put(reminderDenied());
  }
}

function* handleReminderCancelled() {
  yield call(Notifications.cancelAllScheduledNotificationsAsync);
}

export default function* rootSaga() {
  yield takeLatest(reminderRequested, handleReminderRequested);
  yield takeLatest(reminderCancelled, handleReminderCancelled);
}
