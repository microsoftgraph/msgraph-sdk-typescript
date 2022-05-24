import {ServicePlanInfo} from './servicePlanInfo';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ServicePlanInfoImpl implements AdditionalDataHolder, Parsable, ServicePlanInfo {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The object the service plan can be assigned to. The possible values are:User - service plan can be assigned to individual users.Company - service plan can be assigned to the entire tenant. */
    public appliesTo?: string | undefined;
    /** The provisioning status of the service plan. The possible values are:Success - Service is fully provisioned.Disabled - Service has been disabled.ErrorStatus - The service plan has not been provisioned and is in an error state.PendingInput - Service is not yet provisioned; awaiting service confirmation.PendingActivation - Service is provisioned but requires explicit activation by administrator (for example, Intune_O365 service plan)PendingProvisioning - Microsoft has added a new service to the product SKU and it has not been activated in the tenant, yet. */
    public provisioningStatus?: string | undefined;
    /** The unique identifier of the service plan. */
    public servicePlanId?: string | undefined;
    /** The name of the service plan. */
    public servicePlanName?: string | undefined;
    /**
     * Instantiates a new servicePlanInfo and sets the default values.
     * @param servicePlanInfoParameterValue 
     */
    public constructor(servicePlanInfoParameterValue?: ServicePlanInfo | undefined) {
        this.additionalData = servicePlanInfoParameterValue?.additionalData ? servicePlanInfoParameterValue?.additionalData! : {}
        this.appliesTo = servicePlanInfoParameterValue?.appliesTo ;
        this.provisioningStatus = servicePlanInfoParameterValue?.provisioningStatus ;
        this.servicePlanId = servicePlanInfoParameterValue?.servicePlanId ;
        this.servicePlanName = servicePlanInfoParameterValue?.servicePlanName ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "appliesTo": n => { this.appliesTo = n.getStringValue(); },
            "provisioningStatus": n => { this.provisioningStatus = n.getStringValue(); },
            "servicePlanId": n => { this.servicePlanId = n.getStringValue(); },
            "servicePlanName": n => { this.servicePlanName = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.appliesTo){
        writer.writeStringValue("appliesTo", this.appliesTo);
        }
        if(this.provisioningStatus){
        writer.writeStringValue("provisioningStatus", this.provisioningStatus);
        }
        if(this.servicePlanId){
        writer.writeStringValue("servicePlanId", this.servicePlanId);
        }
        if(this.servicePlanName){
        writer.writeStringValue("servicePlanName", this.servicePlanName);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
