import {AccessAction} from './accessAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessAction(writer: SerializationWriter, accessAction: AccessAction | undefined = {} as AccessAction) : void {
        writer.writeStringValue("@odata.type", accessAction.odataType);
        writer.writeAdditionalData(accessAction.additionalData);
}
