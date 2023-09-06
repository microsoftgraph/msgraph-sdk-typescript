import { type AppHostedMediaConfig } from './appHostedMediaConfig';
import { serializeMediaConfig } from './serializeMediaConfig';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAppHostedMediaConfig(writer: SerializationWriter, appHostedMediaConfig: AppHostedMediaConfig | undefined = {} as AppHostedMediaConfig) : void {
        serializeMediaConfig(writer, appHostedMediaConfig)
        writer.writeStringValue("blob", appHostedMediaConfig.blob);
}
