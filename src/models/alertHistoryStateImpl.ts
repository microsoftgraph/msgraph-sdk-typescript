import {AlertFeedback} from './alertFeedback';
import {AlertHistoryState} from './alertHistoryState';
import {AlertStatus} from './alertStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AlertHistoryStateImpl implements AdditionalDataHolder, AlertHistoryState, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The Application ID of the calling application that submitted an update (PATCH) to the alert. The appId should be extracted from the auth token and not entered manually by the calling application. */
    public appId?: string | undefined;
    /** UPN of user the alert was assigned to (note: alert.assignedTo only stores the last value/UPN). */
    public assignedTo?: string | undefined;
    /** Comment entered by signed-in user. */
    public comments?: string[] | undefined;
    /** Analyst feedback on the alert in this update. Possible values are: unknown, truePositive, falsePositive, benignPositive. */
    public feedback?: AlertFeedback | undefined;
    /** Alert status value (if updated). Possible values are: unknown, newAlert, inProgress, resolved, dismissed. */
    public status?: AlertStatus | undefined;
    /** Date and time of the alert update. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z */
    public updatedDateTime?: Date | undefined;
    /** UPN of the signed-in user that updated the alert (taken from the bearer token - if in user/delegated auth mode). */
    public user?: string | undefined;
    /**
     * Instantiates a new alertHistoryState and sets the default values.
     * @param alertHistoryStateParameterValue 
     */
    public constructor(alertHistoryStateParameterValue?: AlertHistoryState | undefined) {
        this.additionalData = alertHistoryStateParameterValue?.additionalData ? alertHistoryStateParameterValue?.additionalData! : {}
        this.appId = alertHistoryStateParameterValue?.appId ;
        this.assignedTo = alertHistoryStateParameterValue?.assignedTo ;
        this.comments = alertHistoryStateParameterValue?.comments ;
        this.feedback = alertHistoryStateParameterValue?.feedback ;
        this.status = alertHistoryStateParameterValue?.status ;
        this.updatedDateTime = alertHistoryStateParameterValue?.updatedDateTime ;
        this.user = alertHistoryStateParameterValue?.user ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appId": n => { this.appId = n.getStringValue(); },
            "assignedTo": n => { this.assignedTo = n.getStringValue(); },
            "comments": n => { this.comments = n.getCollectionOfPrimitiveValues<string>(); },
            "feedback": n => { this.feedback = n.getEnumValue<AlertFeedback>(AlertFeedback); },
            "status": n => { this.status = n.getEnumValue<AlertStatus>(AlertStatus); },
            "updatedDateTime": n => { this.updatedDateTime = n.getDateValue(); },
            "user": n => { this.user = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.appId){
        writer.writeStringValue("appId", this.appId);
        }
        if(this.assignedTo){
        writer.writeStringValue("assignedTo", this.assignedTo);
        }
        if(this.comments){
        writer.writeCollectionOfPrimitiveValues<string>("comments", this.comments);
        }
        if(this.feedback){
        writer.writeEnumValue<AlertFeedback>("feedback", this.feedback);
        }
        if(this.status){
        writer.writeEnumValue<AlertStatus>("status", this.status);
        }
        if(this.updatedDateTime){
        writer.writeDateValue("updatedDateTime", this.updatedDateTime);
        }
        if(this.user){
        writer.writeStringValue("user", this.user);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
