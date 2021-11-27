import React from 'react';
import { Path, Svg } from 'react-native-svg';
import { Icon } from './types';

function IceIcon({ fill }: Icon) {
  return (
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        d="M22.6178 14.7977C22.8555 14.9344 23.029 15.1602 23.0997 15.4252V15.4293C23.1718 15.6939 23.1354 15.9763 22.9987 16.214C22.862 16.4517 22.6362 16.6251 22.3712 16.6959L21.5434 16.9194C20.9914 17.0669 20.6634 17.6339 20.8108 18.186L21.0301 19.0138C21.1022 19.2784 21.0658 19.5608 20.9291 19.7985C20.7924 20.0362 20.5666 20.2097 20.3016 20.2804C20.0342 20.3574 19.747 20.3231 19.5054 20.1851C19.2637 20.0471 19.0881 19.8172 19.0185 19.5478L18.6543 18.1156C18.5457 17.6382 18.2945 17.2052 17.934 16.8739C17.6857 16.729 17.4249 17.0726 17.3628 17.6396L17.0565 20.2804C17.0455 20.5309 16.9072 20.7583 16.6899 20.8833C16.4726 21.0083 16.2065 21.0135 15.9845 20.8972L13.5506 19.8458C13.0167 19.6182 12.6028 19.672 12.6028 19.9576C12.7152 20.4363 12.9708 20.8694 13.3354 21.1993L14.3702 22.2341C14.771 22.6403 14.771 23.2932 14.3702 23.6994C13.964 24.1002 13.3111 24.1002 12.9049 23.6994L12.3006 23.0909C11.8944 22.6901 11.2415 22.6901 10.8353 23.0909L10.231 23.6994C9.82483 24.1002 9.17195 24.1002 8.76575 23.6994C8.36494 23.2932 8.36494 22.6403 8.76575 22.2341L9.80055 21.1993C10.1652 20.8694 10.4207 20.4363 10.5332 19.9576C10.5332 19.672 10.1068 19.6182 9.58531 19.8458L7.15147 20.8972C6.92944 21.0135 6.66331 21.0083 6.44602 20.8833C6.22872 20.7583 6.09043 20.5309 6.07942 20.2804L5.78968 17.6562C5.72759 17.0891 5.46683 16.7456 5.21848 16.8904C4.858 17.2217 4.60681 17.6548 4.49826 18.1322L4.11745 19.5478C4.04786 19.8172 3.87226 20.0471 3.63059 20.1851C3.38892 20.3231 3.10172 20.3574 2.83431 20.2804C2.29067 20.1328 1.96624 19.5761 2.10581 19.0304L2.32519 18.2026C2.47255 17.6505 2.14457 17.0835 1.59255 16.936L0.764719 16.7125C0.49978 16.6417 0.273962 16.4683 0.137239 16.2306C0.00051678 15.9929 -0.0358368 15.7105 0.0362237 15.4459C0.106982 15.1809 0.280406 14.9551 0.518117 14.8184C0.755828 14.6817 1.03822 14.6453 1.30281 14.7174L2.71427 15.094C3.1873 15.2417 3.69409 15.2417 4.16712 15.094C4.41548 14.9492 4.24577 14.5518 3.79046 14.2124L1.66292 12.6312C1.44706 12.4987 1.3155 12.2636 1.3155 12.0103C1.3155 11.7571 1.44706 11.522 1.66292 11.3895L3.79046 9.80831C4.24577 9.46889 4.41548 9.07153 4.16712 8.92666C3.69409 8.77901 3.1873 8.77901 2.71427 8.92666L1.30281 9.30333C1.03822 9.37539 0.755828 9.33903 0.518117 9.20231C0.280406 9.06559 0.106982 8.83977 0.0362237 8.57483C-0.0358368 8.31024 0.00051678 8.02785 0.137239 7.79014C0.273962 7.55242 0.49978 7.379 0.764719 7.30824L1.59255 7.08473C2.14457 6.93721 2.47255 6.3702 2.32519 5.81814L2.10581 4.9903C2.03375 4.72571 2.07011 4.44332 2.20683 4.20561C2.34355 3.9679 2.56937 3.79447 2.83431 3.72371C3.10172 3.6467 3.38892 3.68109 3.63059 3.81907C3.87226 3.95706 4.04786 4.18691 4.11745 4.45635L4.4817 5.8885C4.59025 6.3659 4.84144 6.79898 5.20192 7.13026C5.45027 7.27513 5.71104 6.93158 5.77313 6.36451L6.07942 3.72371C6.08907 3.47252 6.22682 3.24382 6.44435 3.11784C6.66187 2.99186 6.9288 2.9862 7.15147 3.10284L9.58531 4.15419C10.1193 4.38184 10.5332 4.32803 10.5332 4.04243C10.4207 3.56372 10.1652 3.1306 9.80055 2.80068L8.76575 1.76588C8.36494 1.35969 8.36494 0.706805 8.76575 0.300612C9.17195 -0.100204 9.82483 -0.100204 10.231 0.300612L10.8353 0.909072C11.2415 1.30989 11.8944 1.30989 12.3006 0.909072L12.9049 0.304752C13.3111 -0.096065 13.964 -0.096065 14.3702 0.304752C14.771 0.710944 14.771 1.36383 14.3702 1.77002L13.3354 2.80482C12.9708 3.13474 12.7152 3.56786 12.6028 4.04657C12.6028 4.33217 13.0291 4.38598 13.5506 4.15833L15.9845 3.10698C16.2065 2.9906 16.4726 2.99582 16.6899 3.12083C16.9072 3.24584 17.0455 3.47327 17.0565 3.72371L17.3463 6.34795C17.4084 6.91502 17.6691 7.25857 17.9175 7.1137C18.278 6.78243 18.5291 6.34934 18.6377 5.87195L19.0185 4.45635C19.0881 4.18691 19.2637 3.95706 19.5054 3.81907C19.747 3.68109 20.0342 3.6467 20.3016 3.72371C20.8433 3.87132 21.1671 4.42522 21.0301 4.96961L20.8108 5.79744C20.6634 6.3495 20.9914 6.91651 21.5434 7.06403L22.3712 7.28755C22.6362 7.3583 22.862 7.53173 22.9987 7.76944C23.1354 8.00715 23.1718 8.28955 23.0997 8.55414C23.029 8.81907 22.8555 9.04489 22.6178 9.18161C22.3801 9.31834 22.0977 9.35469 21.8331 9.28263L20.4217 8.90597C19.9487 8.75831 19.4419 8.75831 18.9688 8.90597C18.7205 9.05084 18.8902 9.4482 19.3455 9.78761L21.473 11.3688C21.6889 11.5013 21.8205 11.7364 21.8205 11.9897C21.8205 12.2429 21.6889 12.478 21.473 12.6105L19.3455 14.1917C18.8902 14.5311 18.7205 14.9285 18.9688 15.0733C19.4419 15.221 19.9487 15.221 20.4217 15.0733L21.8331 14.6967C22.0977 14.6246 22.3801 14.661 22.6178 14.7977ZM11.7575 16.5278L8.51081 17.9568L7.68071 14.5169L5.35942 11.9961L7.68071 9.59931L8.51081 6.09504L11.7575 7.24504L15.1462 6.09504L15.6486 9.59931L18.012 12.0259L15.6486 14.5169L15.1462 17.9568L11.7575 16.5278Z"
        fill={fill}
      />
    </Svg>
  );
}

export default IceIcon;
