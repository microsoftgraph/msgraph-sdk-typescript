import {createTeamsAppFromDiscriminatorValue} from './createTeamsAppFromDiscriminatorValue';
import {TeamsAppImpl} from './index';
import {TeamsApp} from './teamsApp';
import {TeamsAppCollectionResponse} from './teamsAppCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamsAppCollectionResponseImpl implements AdditionalDataHolder, Parsable, TeamsAppCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: TeamsApp[] | undefined;
    /**
     * Instantiates a new TeamsAppCollectionResponse and sets the default values.
     * @param teamsAppCollectionResponseParameterValue 
     */
    public constructor(teamsAppCollectionResponseParameterValue?: TeamsAppCollectionResponse | undefined) {
        this.additionalData = teamsAppCollectionResponseParameterValue?.additionalData ? teamsAppCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = teamsAppCollectionResponseParameterValue?.nextLink ;
        this.value = teamsAppCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TeamsAppImpl>(createTeamsAppFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TeamsAppImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TeamsAppImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsAppImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
