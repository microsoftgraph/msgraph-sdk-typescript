import {createServicePlanInfoFromDiscriminatorValue} from './createServicePlanInfoFromDiscriminatorValue';
import {EntityImpl, ServicePlanInfoImpl} from './index';
import {LicenseDetails} from './licenseDetails';
import {ServicePlanInfo} from './servicePlanInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of application entities. */
export class LicenseDetailsImpl extends EntityImpl implements LicenseDetails {
    /** Information about the service plans assigned with the license. Read-only, Not nullable */
    private _servicePlans?: ServicePlanInfo[] | undefined;
    /** Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only */
    private _skuId?: string | undefined;
    /** Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only */
    private _skuPartNumber?: string | undefined;
    /**
     * Instantiates a new licenseDetails and sets the default values.
     * @param licenseDetailsParameterValue 
     */
    public constructor(licenseDetailsParameterValue?: LicenseDetails | undefined) {
        super(licenseDetailsParameterValue);
        this._servicePlans = licenseDetailsParameterValue?.servicePlans;
        this._skuId = licenseDetailsParameterValue?.skuId;
        this._skuPartNumber = licenseDetailsParameterValue?.skuPartNumber;
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
        if(this.servicePlans && this.servicePlans.length != 0){        const servicePlansArrValue: ServicePlanInfoImpl[] = [];
        this.servicePlans?.forEach(element => {
            servicePlansArrValue.push((element instanceof ServicePlanInfoImpl? element:new ServicePlanInfoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ServicePlanInfoImpl>("servicePlans", servicePlansArrValue);
        }
        if(this.skuId){
            writer.writeStringValue("skuId", this.skuId);
        }
        if(this.skuPartNumber){
            writer.writeStringValue("skuPartNumber", this.skuPartNumber);
        }
    };
    /**
     * Gets the servicePlans property value. Information about the service plans assigned with the license. Read-only, Not nullable
     * @returns a ServicePlanInfoInterface
     */
    public get servicePlans() {
        return this._servicePlans;
    };
    /**
     * Sets the servicePlans property value. Information about the service plans assigned with the license. Read-only, Not nullable
     * @param value Value to set for the servicePlans property.
     */
    public set servicePlans(value: ServicePlanInfo[] | undefined) {
        if(value) {
            const servicePlansArrValue: ServicePlanInfoImpl[] = [];
            this.servicePlans?.forEach(element => {
                servicePlansArrValue.push((element instanceof ServicePlanInfoImpl? element:new ServicePlanInfoImpl(element)));
            });
            this._servicePlans = servicePlansArrValue;
        }
    };
    /**
     * Gets the skuId property value. Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only
     * @returns a string
     */
    public get skuId() {
        return this._skuId;
    };
    /**
     * Sets the skuId property value. Unique identifier (GUID) for the service SKU. Equal to the skuId property on the related SubscribedSku object. Read-only
     * @param value Value to set for the skuId property.
     */
    public set skuId(value: string | undefined) {
        if(value) {
            this._skuId = value;
        }
    };
    /**
     * Gets the skuPartNumber property value. Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only
     * @returns a string
     */
    public get skuPartNumber() {
        return this._skuPartNumber;
    };
    /**
     * Sets the skuPartNumber property value. Unique SKU display name. Equal to the skuPartNumber on the related SubscribedSku object; for example: 'AAD_Premium'. Read-only
     * @param value Value to set for the skuPartNumber property.
     */
    public set skuPartNumber(value: string | undefined) {
        if(value) {
            this._skuPartNumber = value;
        }
    };
}
