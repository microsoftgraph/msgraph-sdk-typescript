import {createSubjectRightsRequestFromDiscriminatorValue} from './createSubjectRightsRequestFromDiscriminatorValue';
import {SubjectRightsRequest} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Privacy implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _odataType?: string | undefined;
    private _subjectRightsRequests?: SubjectRightsRequest[] | undefined;
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
     * Instantiates a new Privacy and sets the default values.
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
            "@odata.type": n => { this.odataType = n.getStringValue(); },
            "subjectRightsRequests": n => { this.subjectRightsRequests = n.getCollectionOfObjectValues<SubjectRightsRequest>(createSubjectRightsRequestFromDiscriminatorValue); },
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
        writer.writeStringValue("@odata.type", this.odataType);
        writer.writeCollectionOfObjectValues<SubjectRightsRequest>("subjectRightsRequests", this.subjectRightsRequests);
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the subjectRightsRequests property value. 
     * @returns a subjectRightsRequest
     */
    public get subjectRightsRequests() {
        return this._subjectRightsRequests;
    };
    /**
     * Sets the subjectRightsRequests property value. 
     * @param value Value to set for the subjectRightsRequests property.
     */
    public set subjectRightsRequests(value: SubjectRightsRequest[] | undefined) {
        this._subjectRightsRequests = value;
    };
}
