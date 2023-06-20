import {AssignedLabel} from './assignedLabel';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedLabel(assignedLabel: AssignedLabel | undefined = {} as AssignedLabel, writer: SerializationWriter) : void {
        writer.writeStringValue("displayName", assignedLabel.displayName);
        writer.writeStringValue("labelId", assignedLabel.labelId);
        writer.writeStringValue("@odata.type", assignedLabel.odataType);
        writer.writeAdditionalData(assignedLabel.additionalData);
}
