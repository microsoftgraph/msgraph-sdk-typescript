import {createTeamFromDiscriminatorValue} from './createTeamFromDiscriminatorValue';
import {TeamImpl} from './index';
import {Team} from './team';
import {TeamCollectionResponse} from './teamCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class TeamCollectionResponseImpl implements AdditionalDataHolder, Parsable, TeamCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Team[] | undefined;
    /**
     * Instantiates a new TeamCollectionResponse and sets the default values.
     * @param teamCollectionResponseParameterValue 
     */
    public constructor(teamCollectionResponseParameterValue?: TeamCollectionResponse | undefined) {
        this.additionalData = teamCollectionResponseParameterValue?.additionalData ? teamCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = teamCollectionResponseParameterValue?.nextLink ;
        this.value = teamCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<TeamImpl>(createTeamFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: TeamImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new TeamImpl(element));});
        writer.writeCollectionOfObjectValues<TeamImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
