import {WorkbookFilterCriteria} from '../../../../../../../../../../../../../models/';
import {createWorkbookFilterCriteriaFromDiscriminatorValue} from '../../../../../../../../../../../../../models/createWorkbookFilterCriteriaFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ApplyPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _criteria?: WorkbookFilterCriteria | undefined;
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
     * Gets the criteria property value. 
     * @returns a workbookFilterCriteria
     */
    public get criteria() {
        return this._criteria;
    };
    /**
     * Sets the criteria property value. 
     * @param value Value to set for the criteria property.
     */
    public set criteria(value: WorkbookFilterCriteria | undefined) {
        this._criteria = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "criteria": n => { this.criteria = n.getObjectValue<WorkbookFilterCriteria>(createWorkbookFilterCriteriaFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<WorkbookFilterCriteria>("criteria", this.criteria);
        writer.writeAdditionalData(this.additionalData);
    };
}
