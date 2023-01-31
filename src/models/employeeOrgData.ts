import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class EmployeeOrgData implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The cost center associated with the user. Returned only on $select. Supports $filter. */
    private _costCenter?: string | undefined;
    /** The name of the division in which the user works. Returned only on $select. Supports $filter. */
    private _division?: string | undefined;
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
     * Instantiates a new employeeOrgData and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the costCenter property value. The cost center associated with the user. Returned only on $select. Supports $filter.
     * @returns a string
     */
    public get costCenter() {
        return this._costCenter;
    };
    /**
     * Sets the costCenter property value. The cost center associated with the user. Returned only on $select. Supports $filter.
     * @param value Value to set for the costCenter property.
     */
    public set costCenter(value: string | undefined) {
        this._costCenter = value;
    };
    /**
     * Gets the division property value. The name of the division in which the user works. Returned only on $select. Supports $filter.
     * @returns a string
     */
    public get division() {
        return this._division;
    };
    /**
     * Sets the division property value. The name of the division in which the user works. Returned only on $select. Supports $filter.
     * @param value Value to set for the division property.
     */
    public set division(value: string | undefined) {
        this._division = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "costCenter": n => { this.costCenter = n.getStringValue(); },
            "division": n => { this.division = n.getStringValue(); },
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
        writer.writeStringValue("costCenter", this.costCenter);
        writer.writeStringValue("division", this.division);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
