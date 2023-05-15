import {AlertFeedback} from './alertFeedback';
import {AlertHistoryState} from './alertHistoryState';
import {AlertStatus} from './alertStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertHistoryState(alertHistoryState: AlertHistoryState | undefined = {} as AlertHistoryState) : Record<string, (node: ParseNode) => void> {
    return {
        "appId": n => { alertHistoryState.appId = n.getStringValue(); },
        "assignedTo": n => { alertHistoryState.assignedTo = n.getStringValue(); },
        "comments": n => { alertHistoryState.comments = n.getCollectionOfPrimitiveValues<string>(); },
        "feedback": n => { alertHistoryState.feedback = n.getEnumValue<AlertFeedback>(AlertFeedback); },
        "@odata.type": n => { alertHistoryState.odataType = n.getStringValue(); },
        "status": n => { alertHistoryState.status = n.getEnumValue<AlertStatus>(AlertStatus); },
        "updatedDateTime": n => { alertHistoryState.updatedDateTime = n.getDateValue(); },
        "user": n => { alertHistoryState.user = n.getStringValue(); },
    }
}
