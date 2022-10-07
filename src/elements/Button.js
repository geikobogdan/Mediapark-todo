import {forwardRef} from 'react';

const BUTTON_PRIMARY_BASE =
  'flex justify-center items-center no-underline inline-block font-bold cursor-pointer text-center';

const BUTTON_PRIMARY_SIZE_MAP = {
  default: 'py-3.5 px-7 text-xs',
  custom: '',
};

const BUTTON_PRIMARY_VARIANT_MAP = {
  default: 'rounded-10',
};

const BUTTON_PRIMARY_COLOR_MAP = {
  default: 'text-blue bg-yellow hover:bg-yellowDaisy',
  custom: '',
};

export const ButtonPrimary = forwardRef(
  (
    {
      toUpperCase = true,
      variant = 'default',
      size = 'default',
      color = 'default',
      children = '',
      disabled = false,
      className,
      btnClasses = '',
      ...p
    },
    ref,
  ) => {
    const btnIsDisable = disabled
      ? 'rounded-10 cursor-not-allowed text-grey border-grey pointer-events-none'
      : [BUTTON_PRIMARY_VARIANT_MAP[variant], BUTTON_PRIMARY_COLOR_MAP[color]].join(' ');
    const classes = [
      toUpperCase ? 'uppercase' : '',
      BUTTON_PRIMARY_SIZE_MAP[size],
      BUTTON_PRIMARY_COLOR_MAP[color],
      BUTTON_PRIMARY_BASE,
      btnIsDisable,
      className,
      btnClasses,
    ].join(' ');

    return (
      <div ref={ref} className={classes} {...p}>
        {children}
      </div>
    );
  },
);
