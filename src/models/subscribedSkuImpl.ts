import {createLicenseUnitsDetailFromDiscriminatorValue} from './createLicenseUnitsDetailFromDiscriminatorValue';
import {createServicePlanInfoFromDiscriminatorValue} from './createServicePlanInfoFromDiscriminatorValue';
import {EntityImpl, LicenseUnitsDetailImpl, ServicePlanInfoImpl} from './index';
import {LicenseUnitsDetail} from './licenseUnitsDetail';
import {ServicePlanInfo} from './servicePlanInfo';
import {SubscribedSku} from './subscribedSku';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of subscribedSku entities. */
export class SubscribedSkuImpl extends EntityImpl implements Parsable, SubscribedSku {
    /** For example, 'User' or 'Company'. */
    public appliesTo?: string | undefined;
    /** Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription. */
    public capabilityStatus?: string | undefined;
    /** The number of licenses that have been assigned. */
    public consumedUnits?: number | undefined;
    /** Information about the number and status of prepaid licenses. */
    public prepaidUnits?: LicenseUnitsDetail | undefined;
    /** Information about the service plans that are available with the SKU. Not nullable */
    public servicePlans?: ServicePlanInfo[] | undefined;
    /** The unique identifier (GUID) for the service SKU. */
    public skuId?: string | undefined;
    /** The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus. */
    public skuPartNumber?: string | undefined;
    /**
     * Instantiates a new subscribedSku and sets the default values.
     * @param subscribedSkuParameterValue 
     */
    public constructor(subscribedSkuParameterValue?: SubscribedSku | undefined) {
        super();
        this.appliesTo = subscribedSkuParameterValue?.appliesTo ;
        this.capabilityStatus = subscribedSkuParameterValue?.capabilityStatus ;
        this.consumedUnits = subscribedSkuParameterValue?.consumedUnits ;
        this.prepaidUnits = subscribedSkuParameterValue?.prepaidUnits ;
        this.servicePlans = subscribedSkuParameterValue?.servicePlans ;
        this.skuId = subscribedSkuParameterValue?.skuId ;
        this.skuPartNumber = subscribedSkuParameterValue?.skuPartNumber ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "appliesTo": n => { this.appliesTo = n.getStringValue(); },
            "capabilityStatus": n => { this.capabilityStatus = n.getStringValue(); },
            "consumedUnits": n => { this.consumedUnits = n.getNumberValue(); },
            "prepaidUnits": n => { this.prepaidUnits = n.getObjectValue<LicenseUnitsDetailImpl>(createLicenseUnitsDetailFromDiscriminatorValue); },
            "servicePlans": n => { this.servicePlans = n.getCollectionOfObjectValues<ServicePlanInfoImpl>(createServicePlanInfoFromDiscriminatorValue); },
            "skuId": n => { this.skuId = n.getStringValue(); },
            "skuPartNumber": n => { this.skuPartNumber = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.appliesTo){
        writer.writeStringValue("appliesTo", this.appliesTo);
        }
        if(this.capabilityStatus){
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        }
        if(this.consumedUnits){
        writer.writeNumberValue("consumedUnits", this.consumedUnits);
        }
        if(this.prepaidUnits){
        writer.writeObjectValue<LicenseUnitsDetailImpl>("prepaidUnits", new LicenseUnitsDetailImpl(this.prepaidUnits));
        }
        if(this.servicePlans && this.servicePlans.length != 0){        const servicePlansArrValue: ServicePlanInfoImpl[] = []; this.servicePlans?.forEach(element => {servicePlansArrValue.push(new ServicePlanInfoImpl(element));});
        writer.writeCollectionOfObjectValues<ServicePlanInfoImpl>("servicePlans", servicePlansArrValue);
        }
        if(this.skuId){
        writer.writeStringValue("skuId", this.skuId);
        }
        if(this.skuPartNumber){
        writer.writeStringValue("skuPartNumber", this.skuPartNumber);
        }
    };
}
