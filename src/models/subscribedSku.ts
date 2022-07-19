import {createLicenseUnitsDetailFromDiscriminatorValue} from './createLicenseUnitsDetailFromDiscriminatorValue';
import {createServicePlanInfoFromDiscriminatorValue} from './createServicePlanInfoFromDiscriminatorValue';
import {Entity, LicenseUnitsDetail, ServicePlanInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SubscribedSku extends Entity implements Parsable {
    /** For example, 'User' or 'Company'. */
    private _appliesTo?: string | undefined;
    /** Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription. */
    private _capabilityStatus?: string | undefined;
    /** The number of licenses that have been assigned. */
    private _consumedUnits?: number | undefined;
    /** Information about the number and status of prepaid licenses. */
    private _prepaidUnits?: LicenseUnitsDetail | undefined;
    /** Information about the service plans that are available with the SKU. Not nullable */
    private _servicePlans?: ServicePlanInfo[] | undefined;
    /** The unique identifier (GUID) for the service SKU. */
    private _skuId?: string | undefined;
    /** The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus. */
    private _skuPartNumber?: string | undefined;
    /**
     * Gets the appliesTo property value. For example, 'User' or 'Company'.
     * @returns a string
     */
    public get appliesTo() {
        return this._appliesTo;
    };
    /**
     * Sets the appliesTo property value. For example, 'User' or 'Company'.
     * @param value Value to set for the appliesTo property.
     */
    public set appliesTo(value: string | undefined) {
        this._appliesTo = value;
    };
    /**
     * Gets the capabilityStatus property value. Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription.
     * @returns a string
     */
    public get capabilityStatus() {
        return this._capabilityStatus;
    };
    /**
     * Sets the capabilityStatus property value. Possible values are: Enabled, Warning, Suspended, Deleted, LockedOut. The capabilityStatus is Enabled if the prepaidUnits property has at least 1 unit that is enabled, and LockedOut if the customer cancelled their subscription.
     * @param value Value to set for the capabilityStatus property.
     */
    public set capabilityStatus(value: string | undefined) {
        this._capabilityStatus = value;
    };
    /**
     * Instantiates a new SubscribedSku and sets the default values.
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.subscribedSku";
    };
    /**
     * Gets the consumedUnits property value. The number of licenses that have been assigned.
     * @returns a integer
     */
    public get consumedUnits() {
        return this._consumedUnits;
    };
    /**
     * Sets the consumedUnits property value. The number of licenses that have been assigned.
     * @param value Value to set for the consumedUnits property.
     */
    public set consumedUnits(value: number | undefined) {
        this._consumedUnits = value;
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
            "prepaidUnits": n => { this.prepaidUnits = n.getObjectValue<LicenseUnitsDetail>(createLicenseUnitsDetailFromDiscriminatorValue); },
            "servicePlans": n => { this.servicePlans = n.getCollectionOfObjectValues<ServicePlanInfo>(createServicePlanInfoFromDiscriminatorValue); },
            "skuId": n => { this.skuId = n.getStringValue(); },
            "skuPartNumber": n => { this.skuPartNumber = n.getStringValue(); },
        };
    };
    /**
     * Gets the prepaidUnits property value. Information about the number and status of prepaid licenses.
     * @returns a licenseUnitsDetail
     */
    public get prepaidUnits() {
        return this._prepaidUnits;
    };
    /**
     * Sets the prepaidUnits property value. Information about the number and status of prepaid licenses.
     * @param value Value to set for the prepaidUnits property.
     */
    public set prepaidUnits(value: LicenseUnitsDetail | undefined) {
        this._prepaidUnits = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("appliesTo", this.appliesTo);
        writer.writeStringValue("capabilityStatus", this.capabilityStatus);
        writer.writeNumberValue("consumedUnits", this.consumedUnits);
        writer.writeObjectValue<LicenseUnitsDetail>("prepaidUnits", this.prepaidUnits);
        writer.writeCollectionOfObjectValues<ServicePlanInfo>("servicePlans", this.servicePlans);
        writer.writeStringValue("skuId", this.skuId);
        writer.writeStringValue("skuPartNumber", this.skuPartNumber);
    };
    /**
     * Gets the servicePlans property value. Information about the service plans that are available with the SKU. Not nullable
     * @returns a servicePlanInfo
     */
    public get servicePlans() {
        return this._servicePlans;
    };
    /**
     * Sets the servicePlans property value. Information about the service plans that are available with the SKU. Not nullable
     * @param value Value to set for the servicePlans property.
     */
    public set servicePlans(value: ServicePlanInfo[] | undefined) {
        this._servicePlans = value;
    };
    /**
     * Gets the skuId property value. The unique identifier (GUID) for the service SKU.
     * @returns a string
     */
    public get skuId() {
        return this._skuId;
    };
    /**
     * Sets the skuId property value. The unique identifier (GUID) for the service SKU.
     * @param value Value to set for the skuId property.
     */
    public set skuId(value: string | undefined) {
        this._skuId = value;
    };
    /**
     * Gets the skuPartNumber property value. The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus.
     * @returns a string
     */
    public get skuPartNumber() {
        return this._skuPartNumber;
    };
    /**
     * Sets the skuPartNumber property value. The SKU part number; for example: 'AAD_PREMIUM' or 'RMSBASIC'. To get a list of commercial subscriptions that an organization has acquired, see List subscribedSkus.
     * @param value Value to set for the skuPartNumber property.
     */
    public set skuPartNumber(value: string | undefined) {
        this._skuPartNumber = value;
    };
}
