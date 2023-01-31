import {AssignedLicense} from '../../models/';
import {createAssignedLicenseFromDiscriminatorValue} from '../../models/createAssignedLicenseFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignLicensePostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _addLicenses?: AssignedLicense[] | undefined;
    private _removeLicenses?: string[] | undefined;
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
     * Gets the addLicenses property value. 
     * @returns a assignedLicense
     */
    public get addLicenses() {
        return this._addLicenses;
    };
    /**
     * Sets the addLicenses property value. 
     * @param value Value to set for the addLicenses property.
     */
    public set addLicenses(value: AssignedLicense[] | undefined) {
        this._addLicenses = value;
    };
    /**
     * Instantiates a new assignLicensePostRequestBody and sets the default values.
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
            "addLicenses": n => { this.addLicenses = n.getCollectionOfObjectValues<AssignedLicense>(createAssignedLicenseFromDiscriminatorValue); },
            "removeLicenses": n => { this.removeLicenses = n.getCollectionOfPrimitiveValues<string>(); },
        };
    };
    /**
     * Gets the removeLicenses property value. 
     * @returns a Guid
     */
    public get removeLicenses() {
        return this._removeLicenses;
    };
    /**
     * Sets the removeLicenses property value. 
     * @param value Value to set for the removeLicenses property.
     */
    public set removeLicenses(value: string[] | undefined) {
        this._removeLicenses = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<AssignedLicense>("addLicenses", this.addLicenses);
        writer.writeCollectionOfPrimitiveValues<string>("removeLicenses", this.removeLicenses);
        writer.writeAdditionalData(this.additionalData);
    };
}
