import {createDelegatedAdminCustomerFromDiscriminatorValue} from './createDelegatedAdminCustomerFromDiscriminatorValue';
import {createDelegatedAdminRelationshipFromDiscriminatorValue} from './createDelegatedAdminRelationshipFromDiscriminatorValue';
import {DelegatedAdminCustomer, DelegatedAdminRelationship} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TenantRelationship implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _delegatedAdminCustomers?: DelegatedAdminCustomer[] | undefined;
    private _delegatedAdminRelationships?: DelegatedAdminRelationship[] | undefined;
    private _odataType?: string | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        this._additionalData = value;
    };
    /**
     * Instantiates a new TenantRelationship and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the delegatedAdminCustomers property value. 
     * @returns a delegatedAdminCustomer
     */
    public get delegatedAdminCustomers() {
        return this._delegatedAdminCustomers;
    };
    /**
     * Sets the delegatedAdminCustomers property value. 
     * @param value Value to set for the delegatedAdminCustomers property.
     */
    public set delegatedAdminCustomers(value: DelegatedAdminCustomer[] | undefined) {
        this._delegatedAdminCustomers = value;
    };
    /**
     * Gets the delegatedAdminRelationships property value. 
     * @returns a delegatedAdminRelationship
     */
    public get delegatedAdminRelationships() {
        return this._delegatedAdminRelationships;
    };
    /**
     * Sets the delegatedAdminRelationships property value. 
     * @param value Value to set for the delegatedAdminRelationships property.
     */
    public set delegatedAdminRelationships(value: DelegatedAdminRelationship[] | undefined) {
        this._delegatedAdminRelationships = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "delegatedAdminCustomers": n => { this.delegatedAdminCustomers = n.getCollectionOfObjectValues<DelegatedAdminCustomer>(createDelegatedAdminCustomerFromDiscriminatorValue); },
            "delegatedAdminRelationships": n => { this.delegatedAdminRelationships = n.getCollectionOfObjectValues<DelegatedAdminRelationship>(createDelegatedAdminRelationshipFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the @odata.type property value. 
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. 
     * @param value Value to set for the OdataType property.
     */
    public set odataType(value: string | undefined) {
        this._odataType = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<DelegatedAdminCustomer>("delegatedAdminCustomers", this.delegatedAdminCustomers);
        writer.writeCollectionOfObjectValues<DelegatedAdminRelationship>("delegatedAdminRelationships", this.delegatedAdminRelationships);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
