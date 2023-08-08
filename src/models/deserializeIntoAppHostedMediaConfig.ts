import type {AppHostedMediaConfig} from './appHostedMediaConfig';
import {deserializeIntoMediaConfig} from './deserializeIntoMediaConfig';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppHostedMediaConfig(appHostedMediaConfig: AppHostedMediaConfig | undefined = {} as AppHostedMediaConfig) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoMediaConfig(appHostedMediaConfig),
        "blob": n => { appHostedMediaConfig.blob = n.getStringValue(); },
    }
}
