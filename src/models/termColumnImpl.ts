import {TermColumn} from './termColumn';
import {SetImpl, TermImpl} from './termStore/';
import {createSetFromDiscriminatorValue} from './termStore/createSetFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './termStore/createTermFromDiscriminatorValue';
import {Set} from './termStore/set';
import {Term} from './termStore/term';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TermColumnImpl implements AdditionalDataHolder, Parsable, TermColumn {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Specifies whether the column will allow more than one value */
    public allowMultipleValues?: boolean | undefined;
    /** The parentTerm property */
    public parentTerm?: Term | undefined;
    /** Specifies whether to display the entire term path or only the term label. */
    public showFullyQualifiedName?: boolean | undefined;
    /** The termSet property */
    public termSet?: Set | undefined;
    /**
     * Instantiates a new termColumn and sets the default values.
     * @param termColumnParameterValue 
     */
    public constructor(termColumnParameterValue?: TermColumn | undefined) {
        this.additionalData = termColumnParameterValue?.additionalData ? termColumnParameterValue?.additionalData! : {}
        this.allowMultipleValues = termColumnParameterValue?.allowMultipleValues ;
        this.parentTerm = termColumnParameterValue?.parentTerm ;
        this.showFullyQualifiedName = termColumnParameterValue?.showFullyQualifiedName ;
        this.termSet = termColumnParameterValue?.termSet ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowMultipleValues){
        writer.writeBooleanValue("allowMultipleValues", this.allowMultipleValues);
        }
        if(this.parentTerm){
        writer.writeObjectValue<TermImpl>("parentTerm", new TermImpl(this.parentTerm));
        }
        if(this.showFullyQualifiedName){
        writer.writeBooleanValue("showFullyQualifiedName", this.showFullyQualifiedName);
        }
        if(this.termSet){
        writer.writeObjectValue<SetImpl>("termSet", new SetImpl(this.termSet));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
