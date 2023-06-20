import {AccessAction} from './accessAction';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessAction(accessAction: AccessAction | undefined = {} as AccessAction, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", accessAction.odataType);
        writer.writeAdditionalData(accessAction.additionalData);
}
