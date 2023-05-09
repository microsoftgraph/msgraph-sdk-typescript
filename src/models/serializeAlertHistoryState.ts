import {AlertFeedback} from './alertFeedback';
import {AlertHistoryState} from './alertHistoryState';
import {AlertStatus} from './alertStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAlertHistoryState(writer: SerializationWriter, alertHistoryState: AlertHistoryState | undefined = {} as AlertHistoryState) : void {
        writer.writeStringValue("appId", alertHistoryState.appId);
        writer.writeStringValue("assignedTo", alertHistoryState.assignedTo);
        writer.writeCollectionOfPrimitiveValues<string>("comments", alertHistoryState.comments);
        writer.writeEnumValue<AlertFeedback>("feedback", alertHistoryState.feedback);
        writer.writeStringValue("@odata.type", alertHistoryState.odataType);
        writer.writeEnumValue<AlertStatus>("status", alertHistoryState.status);
        writer.writeDateValue("updatedDateTime", alertHistoryState.updatedDateTime);
        writer.writeStringValue("user", alertHistoryState.user);
        writer.writeAdditionalData(alertHistoryState.additionalData);
}
