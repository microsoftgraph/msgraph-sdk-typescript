import {TermColumn} from './termColumn';
import {SetImpl, TermImpl} from './termStore/';
import {createSetFromDiscriminatorValue} from './termStore/createSetFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './termStore/createTermFromDiscriminatorValue';
import {Set} from './termStore/set';
import {Term} from './termStore/term';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermColumnImpl implements TermColumn {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData?: Record<string, unknown> | undefined;
    /** Specifies whether the column will allow more than one value */
    private _allowMultipleValues?: boolean | undefined;
    /** The parentTerm property */
    private _parentTerm?: Term | undefined;
    /** Specifies whether to display the entire term path or only the term label. */
    private _showFullyQualifiedName?: boolean | undefined;
    /** The termSet property */
    private _termSet?: Set | undefined;
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
    public set additionalData(value: Record<string, unknown> | undefined) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Gets the allowMultipleValues property value. Specifies whether the column will allow more than one value
     * @returns a boolean
     */
    public get allowMultipleValues() {
        return this._allowMultipleValues;
    };
    /**
     * Sets the allowMultipleValues property value. Specifies whether the column will allow more than one value
     * @param value Value to set for the allowMultipleValues property.
     */
    public set allowMultipleValues(value: boolean | undefined) {
        if(value) {
            this._allowMultipleValues = value;
        }
    };
    /**
     * Instantiates a new termColumn and sets the default values.
     * @param termColumnParameterValue 
     */
    public constructor(termColumnParameterValue?: TermColumn | undefined) {
        this._additionalData = termColumnParameterValue?.additionalData ? termColumnParameterValue?.additionalData! : {};
        this._allowMultipleValues = termColumnParameterValue?.allowMultipleValues;
        this._parentTerm = termColumnParameterValue?.parentTerm;
        this._showFullyQualifiedName = termColumnParameterValue?.showFullyQualifiedName;
        this._termSet = termColumnParameterValue?.termSet;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowMultipleValues": n => { this.allowMultipleValues = n.getBooleanValue(); },
            "parentTerm": n => { this.parentTerm = n.getObjectValue<TermImpl>(createTermFromDiscriminatorValue); },
            "showFullyQualifiedName": n => { this.showFullyQualifiedName = n.getBooleanValue(); },
            "termSet": n => { this.termSet = n.getObjectValue<SetImpl>(createSetFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the parentTerm property value. The parentTerm property
     * @returns a TermInterface
     */
    public get parentTerm() {
        return this._parentTerm;
    };
    /**
     * Sets the parentTerm property value. The parentTerm property
     * @param value Value to set for the parentTerm property.
     */
    public set parentTerm(value: Term | undefined) {
        if(value) {
            this._parentTerm = value instanceof TermImpl? value as TermImpl: new TermImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowMultipleValues){
            writer.writeBooleanValue("allowMultipleValues", this.allowMultipleValues);
        }
        if(this.parentTerm){
            writer.writeObjectValue<TermImpl>("parentTerm", (this.parentTerm instanceof TermImpl? this.parentTerm as TermImpl: new TermImpl(this.parentTerm)));
        }
        if(this.showFullyQualifiedName){
            writer.writeBooleanValue("showFullyQualifiedName", this.showFullyQualifiedName);
        }
        if(this.termSet){
            writer.writeObjectValue<SetImpl>("termSet", (this.termSet instanceof SetImpl? this.termSet as SetImpl: new SetImpl(this.termSet)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
    /**
     * Gets the showFullyQualifiedName property value. Specifies whether to display the entire term path or only the term label.
     * @returns a boolean
     */
    public get showFullyQualifiedName() {
        return this._showFullyQualifiedName;
    };
    /**
     * Sets the showFullyQualifiedName property value. Specifies whether to display the entire term path or only the term label.
     * @param value Value to set for the showFullyQualifiedName property.
     */
    public set showFullyQualifiedName(value: boolean | undefined) {
        if(value) {
            this._showFullyQualifiedName = value;
        }
    };
    /**
     * Gets the termSet property value. The termSet property
     * @returns a SetInterface
     */
    public get termSet() {
        return this._termSet;
    };
    /**
     * Sets the termSet property value. The termSet property
     * @param value Value to set for the termSet property.
     */
    public set termSet(value: Set | undefined) {
        if(value) {
            this._termSet = value instanceof SetImpl? value as SetImpl: new SetImpl(value);
        }
    };
}
