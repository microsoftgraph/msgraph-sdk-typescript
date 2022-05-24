import {createDirectoryObjectFromDiscriminatorValue} from './createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from './directoryObject';
import {DirectoryObjectCollectionResponse} from './directoryObjectCollectionResponse';
import {DirectoryObjectImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DirectoryObjectCollectionResponseImpl implements AdditionalDataHolder, DirectoryObjectCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DirectoryObject[] | undefined;
    /**
     * Instantiates a new DirectoryObjectCollectionResponse and sets the default values.
     * @param directoryObjectCollectionResponseParameterValue 
     */
    public constructor(directoryObjectCollectionResponseParameterValue?: DirectoryObjectCollectionResponse | undefined) {
        this.additionalData = directoryObjectCollectionResponseParameterValue?.additionalData ? directoryObjectCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = directoryObjectCollectionResponseParameterValue?.nextLink ;
        this.value = directoryObjectCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: DirectoryObjectImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DirectoryObjectImpl(element));});
        writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
