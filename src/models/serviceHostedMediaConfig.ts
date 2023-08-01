import type {MediaConfig} from './mediaConfig';
import type {MediaInfo} from './mediaInfo';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceHostedMediaConfig extends MediaConfig, Parsable {
    /**
     * The list of media to pre-fetch.
     */
    preFetchMedia?: MediaInfo[] | undefined;
}
