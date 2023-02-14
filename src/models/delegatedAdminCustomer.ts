import {createDelegatedAdminServiceManagementDetailFromDiscriminatorValue} from './createDelegatedAdminServiceManagementDetailFromDiscriminatorValue';
import {DelegatedAdminServiceManagementDetail, Entity} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DelegatedAdminCustomer extends Entity implements Parsable {
    /** The Azure AD display name of the customer tenant. Read-only. Supports $orderBy. */
    private _displayName?: string | undefined;
    /** Contains the management details of a service in the customer tenant that's managed by delegated administration. */
    private _serviceManagementDetails?: DelegatedAdminServiceManagementDetail[] | undefined;
    /** The Azure AD-assigned tenant ID of the customer. Read-only. */
    private _tenantId?: string | undefined;
    /**
     * Instantiates a new delegatedAdminCustomer and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the displayName property value. The Azure AD display name of the customer tenant. Read-only. Supports $orderBy.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The Azure AD display name of the customer tenant. Read-only. Supports $orderBy.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        this._displayName = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "displayName": n => { this.displayName = n.getStringValue(); },
            "serviceManagementDetails": n => { this.serviceManagementDetails = n.getCollectionOfObjectValues<DelegatedAdminServiceManagementDetail>(createDelegatedAdminServiceManagementDetailFromDiscriminatorValue); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeCollectionOfObjectValues<DelegatedAdminServiceManagementDetail>("serviceManagementDetails", this.serviceManagementDetails);
        writer.writeStringValue("tenantId", this.tenantId);
    };
    /**
     * Gets the serviceManagementDetails property value. Contains the management details of a service in the customer tenant that's managed by delegated administration.
     * @returns a delegatedAdminServiceManagementDetail
     */
    public get serviceManagementDetails() {
        return this._serviceManagementDetails;
    };
    /**
     * Sets the serviceManagementDetails property value. Contains the management details of a service in the customer tenant that's managed by delegated administration.
     * @param value Value to set for the serviceManagementDetails property.
     */
    public set serviceManagementDetails(value: DelegatedAdminServiceManagementDetail[] | undefined) {
        this._serviceManagementDetails = value;
    };
    /**
     * Gets the tenantId property value. The Azure AD-assigned tenant ID of the customer. Read-only.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The Azure AD-assigned tenant ID of the customer. Read-only.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
}
