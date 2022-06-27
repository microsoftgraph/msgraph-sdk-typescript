import {DirectoryObjectImpl} from '../../../../../models/';
import {createDirectoryObjectFromDiscriminatorValue} from '../../../../../models/createDirectoryObjectFromDiscriminatorValue';
import {DirectoryObject} from '../../../../../models/directoryObject';
import {GetByIdsResponse} from './getByIdsResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the getByIds method. */
export class GetByIdsResponseImpl implements GetByIdsResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: DirectoryObject[] | undefined;
    /**
     * Instantiates a new getByIdsResponse and sets the default values.
     * @param getByIdsResponseParameterValue 
     */
    public constructor(getByIdsResponseParameterValue?: GetByIdsResponse | undefined) {
        this.additionalData = getByIdsResponseParameterValue?.additionalData ? getByIdsResponseParameterValue?.additionalData! : {};
        const valueArrValue: DirectoryObjectImpl[] = []; getByIdsResponseParameterValue?.value?.forEach(element => {valueArrValue.push(element instanceof DirectoryObjectImpl? element : new DirectoryObjectImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<DirectoryObjectImpl>(createDirectoryObjectFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: DirectoryObjectImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof DirectoryObjectImpl? element : new DirectoryObjectImpl(element));});
            writer.writeCollectionOfObjectValues<DirectoryObjectImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
