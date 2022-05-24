import {AuthoredNote} from './authoredNote';
import {AuthoredNoteCollectionResponse} from './authoredNoteCollectionResponse';
import {createAuthoredNoteFromDiscriminatorValue} from './createAuthoredNoteFromDiscriminatorValue';
import {AuthoredNoteImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AuthoredNoteCollectionResponseImpl implements AdditionalDataHolder, AuthoredNoteCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: AuthoredNote[] | undefined;
    /**
     * Instantiates a new AuthoredNoteCollectionResponse and sets the default values.
     * @param authoredNoteCollectionResponseParameterValue 
     */
    public constructor(authoredNoteCollectionResponseParameterValue?: AuthoredNoteCollectionResponse | undefined) {
        this.additionalData = authoredNoteCollectionResponseParameterValue?.additionalData ? authoredNoteCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = authoredNoteCollectionResponseParameterValue?.nextLink ;
        this.value = authoredNoteCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<AuthoredNoteImpl>(createAuthoredNoteFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: AuthoredNoteImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new AuthoredNoteImpl(element));});
        writer.writeCollectionOfObjectValues<AuthoredNoteImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
