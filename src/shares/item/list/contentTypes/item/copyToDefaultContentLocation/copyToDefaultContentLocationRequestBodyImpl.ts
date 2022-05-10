import {ItemReferenceImpl} from '../../../../../../models/';
import {createItemReferenceFromDiscriminatorValue} from '../../../../../../models/createItemReferenceFromDiscriminatorValue';
import {ItemReference} from '../../../../../../models/itemReference';
import {CopyToDefaultContentLocationRequestBody} from './copyToDefaultContentLocationRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the copyToDefaultContentLocation method.  */
export class CopyToDefaultContentLocationRequestBodyImpl implements AdditionalDataHolder, CopyToDefaultContentLocationRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The destinationFileName property  */
    destinationFileName?: string | undefined;
    /** The sourceFile property  */
    sourceFile?: ItemReference | undefined;
    /**
     * Instantiates a new copyToDefaultContentLocationRequestBody and sets the default values.
     * @param copyToDefaultContentLocationRequestBodyParameterValue 
     */
    public constructor(copyToDefaultContentLocationRequestBodyParameterValue?: CopyToDefaultContentLocationRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = copyToDefaultContentLocationRequestBodyParameterValue?.additionalData ? {} : copyToDefaultContentLocationRequestBodyParameterValue?.additionalData!
        this.destinationFileName = copyToDefaultContentLocationRequestBodyParameterValue?.destinationFileName ;
        this.sourceFile = copyToDefaultContentLocationRequestBodyParameterValue?.sourceFile ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "destinationFileName": n => { this.destinationFileName = n.getStringValue(); },
            "sourceFile": n => { this.sourceFile = n.getObjectValue<ItemReferenceImpl>(createItemReferenceFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.destinationFileName){
        if(this.destinationFileName)
        writer.writeStringValue("destinationFileName", this.destinationFileName);
        }
        if(this.sourceFile){
        if(this.sourceFile)
        writer.writeObjectValue<ItemReferenceImpl>("sourceFile", new ItemReferenceImpl(this.sourceFile));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
