import { type MediaInfo } from './mediaInfo';
import { type Prompt } from './prompt';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface MediaPrompt extends Parsable, Prompt {
    /**
     * The mediaInfo property
     */
    mediaInfo?: MediaInfo | undefined;
}
