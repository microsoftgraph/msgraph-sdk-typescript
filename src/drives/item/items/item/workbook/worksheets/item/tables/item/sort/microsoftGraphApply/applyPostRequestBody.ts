import {WorkbookSortField} from '../../../../../../../../../../../models/';
import {createWorkbookSortFieldFromDiscriminatorValue} from '../../../../../../../../../../../models/createWorkbookSortFieldFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplyPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _fields?: WorkbookSortField[] | undefined;
    private _matchCase?: boolean | undefined;
    private _method?: string | undefined;
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
     * Instantiates a new applyPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * Gets the fields property value. 
     * @returns a workbookSortField
     */
    public get fields() {
        return this._fields;
    };
    /**
     * Sets the fields property value. 
     * @param value Value to set for the fields property.
     */
    public set fields(value: WorkbookSortField[] | undefined) {
        this._fields = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "fields": n => { this.fields = n.getCollectionOfObjectValues<WorkbookSortField>(createWorkbookSortFieldFromDiscriminatorValue); },
            "matchCase": n => { this.matchCase = n.getBooleanValue(); },
            "method": n => { this.method = n.getStringValue(); },
        };
    };
    /**
     * Gets the matchCase property value. 
     * @returns a boolean
     */
    public get matchCase() {
        return this._matchCase;
    };
    /**
     * Sets the matchCase property value. 
     * @param value Value to set for the matchCase property.
     */
    public set matchCase(value: boolean | undefined) {
        this._matchCase = value;
    };
    /**
     * Gets the method property value. 
     * @returns a string
     */
    public get method() {
        return this._method;
    };
    /**
     * Sets the method property value. 
     * @param value Value to set for the method property.
     */
    public set method(value: string | undefined) {
        this._method = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<WorkbookSortField>("fields", this.fields);
        writer.writeBooleanValue("matchCase", this.matchCase);
        writer.writeStringValue("method", this.method);
        writer.writeAdditionalData(this.additionalData);
    };
}
