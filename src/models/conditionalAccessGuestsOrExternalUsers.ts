import {ConditionalAccessGuestOrExternalUserTypes} from './conditionalAccessGuestOrExternalUserTypes';
import {createConditionalAccessExternalTenantsFromDiscriminatorValue} from './createConditionalAccessExternalTenantsFromDiscriminatorValue';
import {ConditionalAccessExternalTenants} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessGuestsOrExternalUsers implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The externalTenants property */
    private _externalTenants?: ConditionalAccessExternalTenants | undefined;
    /** The guestOrExternalUserTypes property */
    private _guestOrExternalUserTypes?: ConditionalAccessGuestOrExternalUserTypes | undefined;
    /** The OdataType property */
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
     * Instantiates a new conditionalAccessGuestsOrExternalUsers and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the externalTenants property value. The externalTenants property
     * @returns a conditionalAccessExternalTenants
     */
    public get externalTenants() {
        return this._externalTenants;
    };
    /**
     * Sets the externalTenants property value. The externalTenants property
     * @param value Value to set for the externalTenants property.
     */
    public set externalTenants(value: ConditionalAccessExternalTenants | undefined) {
        this._externalTenants = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "externalTenants": n => { this.externalTenants = n.getObjectValue<ConditionalAccessExternalTenants>(createConditionalAccessExternalTenantsFromDiscriminatorValue); },
            "guestOrExternalUserTypes": n => { this.guestOrExternalUserTypes = n.getEnumValue<ConditionalAccessGuestOrExternalUserTypes>(ConditionalAccessGuestOrExternalUserTypes); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the guestOrExternalUserTypes property value. The guestOrExternalUserTypes property
     * @returns a conditionalAccessGuestOrExternalUserTypes
     */
    public get guestOrExternalUserTypes() {
        return this._guestOrExternalUserTypes;
    };
    /**
     * Sets the guestOrExternalUserTypes property value. The guestOrExternalUserTypes property
     * @param value Value to set for the guestOrExternalUserTypes property.
     */
    public set guestOrExternalUserTypes(value: ConditionalAccessGuestOrExternalUserTypes | undefined) {
        this._guestOrExternalUserTypes = value;
    };
    /**
     * Gets the @odata.type property value. The OdataType property
     * @returns a string
     */
    public get odataType() {
        return this._odataType;
    };
    /**
     * Sets the @odata.type property value. The OdataType property
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
        writer.writeObjectValue<ConditionalAccessExternalTenants>("externalTenants", this.externalTenants);
        writer.writeEnumValue<ConditionalAccessGuestOrExternalUserTypes>("guestOrExternalUserTypes", this.guestOrExternalUserTypes);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
