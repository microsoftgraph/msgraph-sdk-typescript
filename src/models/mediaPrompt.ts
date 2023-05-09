import {MediaInfo} from './mediaInfo';
import {Prompt} from './prompt';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MediaPrompt extends Parsable, Prompt {
    /** The mediaInfo property */
    mediaInfo?: MediaInfo | undefined;
}
