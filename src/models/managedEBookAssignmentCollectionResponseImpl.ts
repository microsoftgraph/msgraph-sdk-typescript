import {createManagedEBookAssignmentFromDiscriminatorValue} from './createManagedEBookAssignmentFromDiscriminatorValue';
import {ManagedEBookAssignmentImpl} from './index';
import {ManagedEBookAssignment} from './managedEBookAssignment';
import {ManagedEBookAssignmentCollectionResponse} from './managedEBookAssignmentCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ManagedEBookAssignmentCollectionResponseImpl implements AdditionalDataHolder, ManagedEBookAssignmentCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ManagedEBookAssignment[] | undefined;
    /**
     * Instantiates a new ManagedEBookAssignmentCollectionResponse and sets the default values.
     * @param managedEBookAssignmentCollectionResponseParameterValue 
     */
    public constructor(managedEBookAssignmentCollectionResponseParameterValue?: ManagedEBookAssignmentCollectionResponse | undefined) {
        this.additionalData = managedEBookAssignmentCollectionResponseParameterValue?.additionalData ? managedEBookAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = managedEBookAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = managedEBookAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ManagedEBookAssignmentImpl>(createManagedEBookAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ManagedEBookAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ManagedEBookAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedEBookAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
