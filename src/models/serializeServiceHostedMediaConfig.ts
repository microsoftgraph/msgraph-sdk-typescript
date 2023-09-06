import { type MediaInfo } from './mediaInfo';
import { serializeMediaConfig } from './serializeMediaConfig';
import { serializeMediaInfo } from './serializeMediaInfo';
import { type ServiceHostedMediaConfig } from './serviceHostedMediaConfig';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeServiceHostedMediaConfig(writer: SerializationWriter, serviceHostedMediaConfig: ServiceHostedMediaConfig | undefined = {} as ServiceHostedMediaConfig) : void {
        serializeMediaConfig(writer, serviceHostedMediaConfig)
        writer.writeCollectionOfObjectValues<MediaInfo>("preFetchMedia", serviceHostedMediaConfig.preFetchMedia, serializeMediaInfo);
}
