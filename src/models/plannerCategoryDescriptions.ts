import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class PlannerCategoryDescriptions implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The label associated with Category 1 */
    private _category1?: string | undefined;
    /** The label associated with Category 10 */
    private _category10?: string | undefined;
    /** The label associated with Category 11 */
    private _category11?: string | undefined;
    /** The label associated with Category 12 */
    private _category12?: string | undefined;
    /** The label associated with Category 13 */
    private _category13?: string | undefined;
    /** The label associated with Category 14 */
    private _category14?: string | undefined;
    /** The label associated with Category 15 */
    private _category15?: string | undefined;
    /** The label associated with Category 16 */
    private _category16?: string | undefined;
    /** The label associated with Category 17 */
    private _category17?: string | undefined;
    /** The label associated with Category 18 */
    private _category18?: string | undefined;
    /** The label associated with Category 19 */
    private _category19?: string | undefined;
    /** The label associated with Category 2 */
    private _category2?: string | undefined;
    /** The label associated with Category 20 */
    private _category20?: string | undefined;
    /** The label associated with Category 21 */
    private _category21?: string | undefined;
    /** The label associated with Category 22 */
    private _category22?: string | undefined;
    /** The label associated with Category 23 */
    private _category23?: string | undefined;
    /** The label associated with Category 24 */
    private _category24?: string | undefined;
    /** The label associated with Category 25 */
    private _category25?: string | undefined;
    /** The label associated with Category 3 */
    private _category3?: string | undefined;
    /** The label associated with Category 4 */
    private _category4?: string | undefined;
    /** The label associated with Category 5 */
    private _category5?: string | undefined;
    /** The label associated with Category 6 */
    private _category6?: string | undefined;
    /** The label associated with Category 7 */
    private _category7?: string | undefined;
    /** The label associated with Category 8 */
    private _category8?: string | undefined;
    /** The label associated with Category 9 */
    private _category9?: string | undefined;
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
     * Gets the category1 property value. The label associated with Category 1
     * @returns a string
     */
    public get category1() {
        return this._category1;
    };
    /**
     * Sets the category1 property value. The label associated with Category 1
     * @param value Value to set for the category1 property.
     */
    public set category1(value: string | undefined) {
        this._category1 = value;
    };
    /**
     * Gets the category10 property value. The label associated with Category 10
     * @returns a string
     */
    public get category10() {
        return this._category10;
    };
    /**
     * Sets the category10 property value. The label associated with Category 10
     * @param value Value to set for the category10 property.
     */
    public set category10(value: string | undefined) {
        this._category10 = value;
    };
    /**
     * Gets the category11 property value. The label associated with Category 11
     * @returns a string
     */
    public get category11() {
        return this._category11;
    };
    /**
     * Sets the category11 property value. The label associated with Category 11
     * @param value Value to set for the category11 property.
     */
    public set category11(value: string | undefined) {
        this._category11 = value;
    };
    /**
     * Gets the category12 property value. The label associated with Category 12
     * @returns a string
     */
    public get category12() {
        return this._category12;
    };
    /**
     * Sets the category12 property value. The label associated with Category 12
     * @param value Value to set for the category12 property.
     */
    public set category12(value: string | undefined) {
        this._category12 = value;
    };
    /**
     * Gets the category13 property value. The label associated with Category 13
     * @returns a string
     */
    public get category13() {
        return this._category13;
    };
    /**
     * Sets the category13 property value. The label associated with Category 13
     * @param value Value to set for the category13 property.
     */
    public set category13(value: string | undefined) {
        this._category13 = value;
    };
    /**
     * Gets the category14 property value. The label associated with Category 14
     * @returns a string
     */
    public get category14() {
        return this._category14;
    };
    /**
     * Sets the category14 property value. The label associated with Category 14
     * @param value Value to set for the category14 property.
     */
    public set category14(value: string | undefined) {
        this._category14 = value;
    };
    /**
     * Gets the category15 property value. The label associated with Category 15
     * @returns a string
     */
    public get category15() {
        return this._category15;
    };
    /**
     * Sets the category15 property value. The label associated with Category 15
     * @param value Value to set for the category15 property.
     */
    public set category15(value: string | undefined) {
        this._category15 = value;
    };
    /**
     * Gets the category16 property value. The label associated with Category 16
     * @returns a string
     */
    public get category16() {
        return this._category16;
    };
    /**
     * Sets the category16 property value. The label associated with Category 16
     * @param value Value to set for the category16 property.
     */
    public set category16(value: string | undefined) {
        this._category16 = value;
    };
    /**
     * Gets the category17 property value. The label associated with Category 17
     * @returns a string
     */
    public get category17() {
        return this._category17;
    };
    /**
     * Sets the category17 property value. The label associated with Category 17
     * @param value Value to set for the category17 property.
     */
    public set category17(value: string | undefined) {
        this._category17 = value;
    };
    /**
     * Gets the category18 property value. The label associated with Category 18
     * @returns a string
     */
    public get category18() {
        return this._category18;
    };
    /**
     * Sets the category18 property value. The label associated with Category 18
     * @param value Value to set for the category18 property.
     */
    public set category18(value: string | undefined) {
        this._category18 = value;
    };
    /**
     * Gets the category19 property value. The label associated with Category 19
     * @returns a string
     */
    public get category19() {
        return this._category19;
    };
    /**
     * Sets the category19 property value. The label associated with Category 19
     * @param value Value to set for the category19 property.
     */
    public set category19(value: string | undefined) {
        this._category19 = value;
    };
    /**
     * Gets the category2 property value. The label associated with Category 2
     * @returns a string
     */
    public get category2() {
        return this._category2;
    };
    /**
     * Sets the category2 property value. The label associated with Category 2
     * @param value Value to set for the category2 property.
     */
    public set category2(value: string | undefined) {
        this._category2 = value;
    };
    /**
     * Gets the category20 property value. The label associated with Category 20
     * @returns a string
     */
    public get category20() {
        return this._category20;
    };
    /**
     * Sets the category20 property value. The label associated with Category 20
     * @param value Value to set for the category20 property.
     */
    public set category20(value: string | undefined) {
        this._category20 = value;
    };
    /**
     * Gets the category21 property value. The label associated with Category 21
     * @returns a string
     */
    public get category21() {
        return this._category21;
    };
    /**
     * Sets the category21 property value. The label associated with Category 21
     * @param value Value to set for the category21 property.
     */
    public set category21(value: string | undefined) {
        this._category21 = value;
    };
    /**
     * Gets the category22 property value. The label associated with Category 22
     * @returns a string
     */
    public get category22() {
        return this._category22;
    };
    /**
     * Sets the category22 property value. The label associated with Category 22
     * @param value Value to set for the category22 property.
     */
    public set category22(value: string | undefined) {
        this._category22 = value;
    };
    /**
     * Gets the category23 property value. The label associated with Category 23
     * @returns a string
     */
    public get category23() {
        return this._category23;
    };
    /**
     * Sets the category23 property value. The label associated with Category 23
     * @param value Value to set for the category23 property.
     */
    public set category23(value: string | undefined) {
        this._category23 = value;
    };
    /**
     * Gets the category24 property value. The label associated with Category 24
     * @returns a string
     */
    public get category24() {
        return this._category24;
    };
    /**
     * Sets the category24 property value. The label associated with Category 24
     * @param value Value to set for the category24 property.
     */
    public set category24(value: string | undefined) {
        this._category24 = value;
    };
    /**
     * Gets the category25 property value. The label associated with Category 25
     * @returns a string
     */
    public get category25() {
        return this._category25;
    };
    /**
     * Sets the category25 property value. The label associated with Category 25
     * @param value Value to set for the category25 property.
     */
    public set category25(value: string | undefined) {
        this._category25 = value;
    };
    /**
     * Gets the category3 property value. The label associated with Category 3
     * @returns a string
     */
    public get category3() {
        return this._category3;
    };
    /**
     * Sets the category3 property value. The label associated with Category 3
     * @param value Value to set for the category3 property.
     */
    public set category3(value: string | undefined) {
        this._category3 = value;
    };
    /**
     * Gets the category4 property value. The label associated with Category 4
     * @returns a string
     */
    public get category4() {
        return this._category4;
    };
    /**
     * Sets the category4 property value. The label associated with Category 4
     * @param value Value to set for the category4 property.
     */
    public set category4(value: string | undefined) {
        this._category4 = value;
    };
    /**
     * Gets the category5 property value. The label associated with Category 5
     * @returns a string
     */
    public get category5() {
        return this._category5;
    };
    /**
     * Sets the category5 property value. The label associated with Category 5
     * @param value Value to set for the category5 property.
     */
    public set category5(value: string | undefined) {
        this._category5 = value;
    };
    /**
     * Gets the category6 property value. The label associated with Category 6
     * @returns a string
     */
    public get category6() {
        return this._category6;
    };
    /**
     * Sets the category6 property value. The label associated with Category 6
     * @param value Value to set for the category6 property.
     */
    public set category6(value: string | undefined) {
        this._category6 = value;
    };
    /**
     * Gets the category7 property value. The label associated with Category 7
     * @returns a string
     */
    public get category7() {
        return this._category7;
    };
    /**
     * Sets the category7 property value. The label associated with Category 7
     * @param value Value to set for the category7 property.
     */
    public set category7(value: string | undefined) {
        this._category7 = value;
    };
    /**
     * Gets the category8 property value. The label associated with Category 8
     * @returns a string
     */
    public get category8() {
        return this._category8;
    };
    /**
     * Sets the category8 property value. The label associated with Category 8
     * @param value Value to set for the category8 property.
     */
    public set category8(value: string | undefined) {
        this._category8 = value;
    };
    /**
     * Gets the category9 property value. The label associated with Category 9
     * @returns a string
     */
    public get category9() {
        return this._category9;
    };
    /**
     * Sets the category9 property value. The label associated with Category 9
     * @param value Value to set for the category9 property.
     */
    public set category9(value: string | undefined) {
        this._category9 = value;
    };
    /**
     * Instantiates a new plannerCategoryDescriptions and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
        this.odataType = "#microsoft.graph.plannerCategoryDescriptions";
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "category1": n => { this.category1 = n.getStringValue(); },
            "category10": n => { this.category10 = n.getStringValue(); },
            "category11": n => { this.category11 = n.getStringValue(); },
            "category12": n => { this.category12 = n.getStringValue(); },
            "category13": n => { this.category13 = n.getStringValue(); },
            "category14": n => { this.category14 = n.getStringValue(); },
            "category15": n => { this.category15 = n.getStringValue(); },
            "category16": n => { this.category16 = n.getStringValue(); },
            "category17": n => { this.category17 = n.getStringValue(); },
            "category18": n => { this.category18 = n.getStringValue(); },
            "category19": n => { this.category19 = n.getStringValue(); },
            "category2": n => { this.category2 = n.getStringValue(); },
            "category20": n => { this.category20 = n.getStringValue(); },
            "category21": n => { this.category21 = n.getStringValue(); },
            "category22": n => { this.category22 = n.getStringValue(); },
            "category23": n => { this.category23 = n.getStringValue(); },
            "category24": n => { this.category24 = n.getStringValue(); },
            "category25": n => { this.category25 = n.getStringValue(); },
            "category3": n => { this.category3 = n.getStringValue(); },
            "category4": n => { this.category4 = n.getStringValue(); },
            "category5": n => { this.category5 = n.getStringValue(); },
            "category6": n => { this.category6 = n.getStringValue(); },
            "category7": n => { this.category7 = n.getStringValue(); },
            "category8": n => { this.category8 = n.getStringValue(); },
            "category9": n => { this.category9 = n.getStringValue(); },
            "@odata.type": n => { this.odataType = n.getStringValue(); },
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
        writer.writeStringValue("category1", this.category1);
        writer.writeStringValue("category10", this.category10);
        writer.writeStringValue("category11", this.category11);
        writer.writeStringValue("category12", this.category12);
        writer.writeStringValue("category13", this.category13);
        writer.writeStringValue("category14", this.category14);
        writer.writeStringValue("category15", this.category15);
        writer.writeStringValue("category16", this.category16);
        writer.writeStringValue("category17", this.category17);
        writer.writeStringValue("category18", this.category18);
        writer.writeStringValue("category19", this.category19);
        writer.writeStringValue("category2", this.category2);
        writer.writeStringValue("category20", this.category20);
        writer.writeStringValue("category21", this.category21);
        writer.writeStringValue("category22", this.category22);
        writer.writeStringValue("category23", this.category23);
        writer.writeStringValue("category24", this.category24);
        writer.writeStringValue("category25", this.category25);
        writer.writeStringValue("category3", this.category3);
        writer.writeStringValue("category4", this.category4);
        writer.writeStringValue("category5", this.category5);
        writer.writeStringValue("category6", this.category6);
        writer.writeStringValue("category7", this.category7);
        writer.writeStringValue("category8", this.category8);
        writer.writeStringValue("category9", this.category9);
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeAdditionalData(this.additionalData);
    };
}
