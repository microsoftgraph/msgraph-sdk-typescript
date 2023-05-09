import {AssignedLabel} from './assignedLabel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedLabel(writer: SerializationWriter, assignedLabel: AssignedLabel | undefined = {} as AssignedLabel) : void {
        writer.writeStringValue("displayName", assignedLabel.displayName);
        writer.writeStringValue("labelId", assignedLabel.labelId);
        writer.writeStringValue("@odata.type", assignedLabel.odataType);
        writer.writeAdditionalData(assignedLabel.additionalData);
}
