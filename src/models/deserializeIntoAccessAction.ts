import {AccessAction} from './accessAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessAction(accessAction: AccessAction | undefined = {} as AccessAction) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessAction.odataType = n.getStringValue(); },
    }
}
