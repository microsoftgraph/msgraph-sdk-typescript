import {AppHostedMediaConfig} from './appHostedMediaConfig';
import {serializeMediaConfig} from './serializeMediaConfig';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppHostedMediaConfig(writer: SerializationWriter, appHostedMediaConfig: AppHostedMediaConfig | undefined = {} as AppHostedMediaConfig) : void {
        serializeMediaConfig(writer, appHostedMediaConfig)
        writer.writeStringValue("blob", appHostedMediaConfig.blob);
}
