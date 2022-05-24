import {createServicePlanInfoFromDiscriminatorValue} from './createServicePlanInfoFromDiscriminatorValue';
import {EntityImpl, ServicePlanInfoImpl} from './index';
import {LicenseDetails} from './licenseDetails';
import {ServicePlanInfo} from './servicePlanInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class LicenseDetailsImpl extends EntityImpl implements LicenseDetails, Parsable {
    /** Information about the service plans assigned with the license. Read-only, Not nullable */
    public servicePlans?: ServicePlanInfo[] | undefined;
    /** Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only */
    public skuId?: string | undefined;
    /** Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only */
    public skuPartNumber?: string | undefined;
    /**
     * Instantiates a new licenseDetails and sets the default values.
     * @param licenseDetailsParameterValue 
     */
    public constructor(licenseDetailsParameterValue?: LicenseDetails | undefined) {
        super();
        this.servicePlans = licenseDetailsParameterValue?.servicePlans ;
        this.skuId = licenseDetailsParameterValue?.skuId ;
        this.skuPartNumber = licenseDetailsParameterValue?.skuPartNumber ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
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
