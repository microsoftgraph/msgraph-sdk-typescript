import {createAvailabilityItemFromDiscriminatorValue} from './createAvailabilityItemFromDiscriminatorValue';
import {AvailabilityItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class StaffAvailabilityItem implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** Each item in this collection indicates a slot and the status of the staff member. */
    private _availabilityItems?: AvailabilityItem[] | undefined;
    /** The OdataType property */
    private _odataType?: string | undefined;
    /** The ID of the staff member. */
    private _staffId?: string | undefined;
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
     * Gets the availabilityItems property value. Each item in this collection indicates a slot and the status of the staff member.
     * @returns a availabilityItem
     */
    public get availabilityItems() {
        return this._availabilityItems;
    };
    /**
     * Sets the availabilityItems property value. Each item in this collection indicates a slot and the status of the staff member.
     * @param value Value to set for the availabilityItems property.
     */
    public set availabilityItems(value: AvailabilityItem[] | undefined) {
        this._availabilityItems = value;
    };
    /**
     * Instantiates a new staffAvailabilityItem and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.staffAvailabilityItem";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "availabilityItems": n => { this.availabilityItems = n.getCollectionOfObjectValues<AvailabilityItem>(createAvailabilityItemFromDiscriminatorValue); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "staffId": n => { this.staffId = n.getStringValue(); },
        };
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
        writer.writeCollectionOfObjectValues<AvailabilityItem>("availabilityItems", this.availabilityItems);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeStringValue("staffId", this.staffId);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the staffId property value. The ID of the staff member.
     * @returns a string
     */
    public get staffId() {
        return this._staffId;
    };
    /**
     * Sets the staffId property value. The ID of the staff member.
     * @param value Value to set for the staffId property.
     */
    public set staffId(value: string | undefined) {
        this._staffId = value;
    };
}
