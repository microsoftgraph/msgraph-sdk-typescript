import {ConditionalAccessExternalTenantsMembershipKind} from './conditionalAccessExternalTenantsMembershipKind';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConditionalAccessExternalTenants implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The membershipKind property */
    private _membershipKind?: ConditionalAccessExternalTenantsMembershipKind | undefined;
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
     * Instantiates a new conditionalAccessExternalTenants and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "membershipKind": n => { this.membershipKind = n.getEnumValue<ConditionalAccessExternalTenantsMembershipKind>(ConditionalAccessExternalTenantsMembershipKind); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
        };
    };
    /**
     * Gets the membershipKind property value. The membershipKind property
     * @returns a conditionalAccessExternalTenantsMembershipKind
     */
    public get membershipKind() {
        return this._membershipKind;
    };
    /**
     * Sets the membershipKind property value. The membershipKind property
     * @param value Value to set for the membershipKind property.
     */
    public set membershipKind(value: ConditionalAccessExternalTenantsMembershipKind | undefined) {
        this._membershipKind = value;
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
        writer.writeEnumValue<ConditionalAccessExternalTenantsMembershipKind>("membershipKind", this.membershipKind);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
