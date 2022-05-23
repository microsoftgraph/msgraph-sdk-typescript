import {AccessReviewHistoryDefinition} from './accessReviewHistoryDefinition';
import {AccessReviewHistoryInstance} from './accessReviewHistoryInstance';
import {AccessReviewHistoryScheduleSettings} from './accessReviewHistoryScheduleSettings';
import {AccessReviewHistoryStatus} from './accessReviewHistoryStatus';
import {AccessReviewScope} from './accessReviewScope';
import {createAccessReviewHistoryInstanceFromDiscriminatorValue} from './createAccessReviewHistoryInstanceFromDiscriminatorValue';
import {createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue} from './createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue';
import {createAccessReviewScopeFromDiscriminatorValue} from './createAccessReviewScopeFromDiscriminatorValue';
import {createUserIdentityFromDiscriminatorValue} from './createUserIdentityFromDiscriminatorValue';
import {AccessReviewHistoryInstanceImpl, AccessReviewHistoryScheduleSettingsImpl, AccessReviewScopeImpl, EntityImpl, UserIdentityImpl} from './index';
import {UserIdentity} from './userIdentity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the identityGovernance singleton. */
export class AccessReviewHistoryDefinitionImpl extends EntityImpl implements AccessReviewHistoryDefinition, Parsable {
    /** The createdBy property */
    public createdBy?: UserIdentity | undefined;
    /** Timestamp when the access review definition was created. */
    public createdDateTime?: Date | undefined;
    /** Determines which review decisions will be included in the fetched review history data if specified. Optional on create. All decisions will be included by default if no decisions are provided on create. Possible values are: approve, deny, dontKnow, notReviewed, and notNotified. */
    public decisions?: string[] | undefined;
    /** Name for the access review history data collection. Required. */
    public displayName?: string | undefined;
    /** If the accessReviewHistoryDefinition is a recurring definition, instances represent each recurrence. A definition that does not recur will have exactly one instance. */
    public instances?: AccessReviewHistoryInstance[] | undefined;
    /** A timestamp. Reviews ending on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined. */
    public reviewHistoryPeriodEndDateTime?: Date | undefined;
    /** A timestamp. Reviews starting on or before this date will be included in the fetched history data. Only required if scheduleSettings is not defined. */
    public reviewHistoryPeriodStartDateTime?: Date | undefined;
    /** The settings for a recurring access review history definition series. Only required if reviewHistoryPeriodStartDateTime or reviewHistoryPeriodEndDateTime are not defined. Not supported yet. */
    public scheduleSettings?: AccessReviewHistoryScheduleSettings | undefined;
    /** Used to scope what reviews are included in the fetched history data. Fetches reviews whose scope matches with this provided scope. Required. */
    public scopes?: AccessReviewScope[] | undefined;
    /** Represents the status of the review history data collection. The possible values are: done, inProgress, error, requested, unknownFutureValue. */
    public status?: AccessReviewHistoryStatus | undefined;
    /**
     * Instantiates a new accessReviewHistoryDefinition and sets the default values.
     * @param accessReviewHistoryDefinitionParameterValue 
     */
    public constructor(accessReviewHistoryDefinitionParameterValue?: AccessReviewHistoryDefinition | undefined) {
        super();
        this.createdBy = accessReviewHistoryDefinitionParameterValue?.createdBy ;
        this.createdDateTime = accessReviewHistoryDefinitionParameterValue?.createdDateTime ;
        this.decisions = accessReviewHistoryDefinitionParameterValue?.decisions ;
        this.displayName = accessReviewHistoryDefinitionParameterValue?.displayName ;
        this.instances = accessReviewHistoryDefinitionParameterValue?.instances ;
        this.reviewHistoryPeriodEndDateTime = accessReviewHistoryDefinitionParameterValue?.reviewHistoryPeriodEndDateTime ;
        this.reviewHistoryPeriodStartDateTime = accessReviewHistoryDefinitionParameterValue?.reviewHistoryPeriodStartDateTime ;
        this.scheduleSettings = accessReviewHistoryDefinitionParameterValue?.scheduleSettings ;
        this.scopes = accessReviewHistoryDefinitionParameterValue?.scopes ;
        this.status = accessReviewHistoryDefinitionParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdBy": n => { this.createdBy = n.getObjectValue<UserIdentityImpl>(createUserIdentityFromDiscriminatorValue); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "decisions": n => { this.decisions = n.getCollectionOfPrimitiveValues<string>(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "instances": n => { this.instances = n.getCollectionOfObjectValues<AccessReviewHistoryInstanceImpl>(createAccessReviewHistoryInstanceFromDiscriminatorValue); },
            "reviewHistoryPeriodEndDateTime": n => { this.reviewHistoryPeriodEndDateTime = n.getDateValue(); },
            "reviewHistoryPeriodStartDateTime": n => { this.reviewHistoryPeriodStartDateTime = n.getDateValue(); },
            "scheduleSettings": n => { this.scheduleSettings = n.getObjectValue<AccessReviewHistoryScheduleSettingsImpl>(createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue); },
            "scopes": n => { this.scopes = n.getCollectionOfObjectValues<AccessReviewScopeImpl>(createAccessReviewScopeFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<AccessReviewHistoryStatus>(AccessReviewHistoryStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdBy){
        writer.writeObjectValue<UserIdentityImpl>("createdBy", new UserIdentityImpl(this.createdBy));
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.decisions){
        writer.writeCollectionOfPrimitiveValues<string>("decisions", this.decisions);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.instances && this.instances.length != 0){        const instancesArrValue: AccessReviewHistoryInstanceImpl[] = []; this.instances?.forEach(element => {instancesArrValue.push(new AccessReviewHistoryInstanceImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewHistoryInstanceImpl>("instances", instancesArrValue);
        }
        if(this.reviewHistoryPeriodEndDateTime){
        writer.writeDateValue("reviewHistoryPeriodEndDateTime", this.reviewHistoryPeriodEndDateTime);
        }
        if(this.reviewHistoryPeriodStartDateTime){
        writer.writeDateValue("reviewHistoryPeriodStartDateTime", this.reviewHistoryPeriodStartDateTime);
        }
        if(this.scheduleSettings){
        writer.writeObjectValue<AccessReviewHistoryScheduleSettingsImpl>("scheduleSettings", new AccessReviewHistoryScheduleSettingsImpl(this.scheduleSettings));
        }
        if(this.scopes && this.scopes.length != 0){        const scopesArrValue: AccessReviewScopeImpl[] = []; this.scopes?.forEach(element => {scopesArrValue.push(new AccessReviewScopeImpl(element));});
        writer.writeCollectionOfObjectValues<AccessReviewScopeImpl>("scopes", scopesArrValue);
        }
        if(this.status){
        writer.writeEnumValue<AccessReviewHistoryStatus>("status", this.status);
        }
    };
}
