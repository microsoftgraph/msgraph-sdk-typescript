import {UserAgent} from './userAgent';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserAgent(userAgent: UserAgent | undefined = {} as UserAgent) : Record<string, (node: ParseNode) => void> {
    return {
        "applicationVersion": n => { userAgent.applicationVersion = n.getStringValue(); },
        "headerValue": n => { userAgent.headerValue = n.getStringValue(); },
        "@odata.type": n => { userAgent.odataType = n.getStringValue(); },
    }
}
