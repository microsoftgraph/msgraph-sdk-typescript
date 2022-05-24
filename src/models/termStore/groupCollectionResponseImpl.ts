import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {Group} from './group';
import {GroupCollectionResponse} from './groupCollectionResponse';
import {GroupImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class GroupCollectionResponseImpl implements AdditionalDataHolder, GroupCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Group[] | undefined;
    /**
     * Instantiates a new GroupCollectionResponse and sets the default values.
     * @param groupCollectionResponseParameterValue 
     */
    public constructor(groupCollectionResponseParameterValue?: GroupCollectionResponse | undefined) {
        this.additionalData = groupCollectionResponseParameterValue?.additionalData ? groupCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = groupCollectionResponseParameterValue?.nextLink ;
        this.value = groupCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<GroupImpl>(createGroupFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: GroupImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new GroupImpl(element));});
        writer.writeCollectionOfObjectValues<GroupImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
