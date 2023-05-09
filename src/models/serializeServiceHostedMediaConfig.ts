import {MediaInfo} from './mediaInfo';
import {serializeMediaConfig} from './serializeMediaConfig';
import {serializeMediaInfo} from './serializeMediaInfo';
import {ServiceHostedMediaConfig} from './serviceHostedMediaConfig';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeServiceHostedMediaConfig(writer: SerializationWriter, serviceHostedMediaConfig: ServiceHostedMediaConfig | undefined = {} as ServiceHostedMediaConfig) : void {
        serializeMediaConfig(writer, serviceHostedMediaConfig)
        writer.writeCollectionOfObjectValues<MediaInfo>("preFetchMedia", serviceHostedMediaConfig.preFetchMedia, serializeMediaInfo);
}
