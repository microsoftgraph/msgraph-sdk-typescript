import {createMediaInfoFromDiscriminatorValue} from './createMediaInfoFromDiscriminatorValue';
import {deserializeIntoMediaConfig} from './deserializeIntoMediaConfig';
import type {MediaInfo} from './mediaInfo';
import {serializeMediaInfo} from './serializeMediaInfo';
import type {ServiceHostedMediaConfig} from './serviceHostedMediaConfig';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoServiceHostedMediaConfig(serviceHostedMediaConfig: ServiceHostedMediaConfig | undefined = {} as ServiceHostedMediaConfig) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMediaConfig(serviceHostedMediaConfig),
        "preFetchMedia": n => { serviceHostedMediaConfig.preFetchMedia = n.getCollectionOfObjectValues<MediaInfo>(createMediaInfoFromDiscriminatorValue); },
    }
}
