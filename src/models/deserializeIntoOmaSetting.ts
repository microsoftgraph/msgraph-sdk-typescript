import {OmaSetting} from './omaSetting';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOmaSetting(omaSetting: OmaSetting | undefined = {} as OmaSetting) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { omaSetting.description = n.getStringValue(); },
        "displayName": n => { omaSetting.displayName = n.getStringValue(); },
        "@odata.type": n => { omaSetting.odataType = n.getStringValue(); },
        "omaUri": n => { omaSetting.omaUri = n.getStringValue(); },
    }
}
