import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import { Button, Welcome } from '@storybook/react/demo';
/////////////////////////////////////////////////////////////
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import App from '../App';

storiesOf('Welcome', module)
	.add('to Storybook', () => <Welcome showApp={linkTo('Button')} />);
//////////////////////////////////////////////////////////////
storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with text', () => <Button onClick={action('clicked')}>Hello Button</Button>)
  .add('Interactive demo', () => <Button disabled={boolean('Disabled', false)}>{text('Button text', 'Default')}</Button>)
  .add('Interactive demo 2', withInfo('doc string about my button component')(() =>
		<Button onClick={action('clicked')} disabled={boolean('Disabled', false)}>{text('Button text', 'Default')}</Button>
	));
//////////////////////////////////////////////////////////////
storiesOf('App', module)
  .addDecorator(withKnobs)
  .add('test App', withInfo(`<div>
        <p>Не маловажной особенностью является возможность собрать <strong>Storybook</strong> в статичные файлы.<br/>
        Которые можно будет например опубликовать на каком либо сайте или использовать внутри компании в качестве документации.</p>
      </div>`)(() => 
    <App disabled={boolean('Disabled', false)} textButton={text('Button text', 'имя кнопки')}/>
  ))
  .add('second App', withInfo(`<div>
        <p>Description module.</p>
      </div>`)(() => 
    <App disabled={boolean('Disabled', false)} textButton={text('Button text', 'имя кнопки')}/>
  ));
