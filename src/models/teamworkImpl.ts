import {createWorkforceIntegrationFromDiscriminatorValue} from './createWorkforceIntegrationFromDiscriminatorValue';
import {EntityImpl, WorkforceIntegrationImpl} from './index';
import {Teamwork} from './teamwork';
import {WorkforceIntegration} from './workforceIntegration';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the teamwork singleton. */
export class TeamworkImpl extends EntityImpl implements Parsable, Teamwork {
    /** A workforce integration with shifts. */
    public workforceIntegrations?: WorkforceIntegration[] | undefined;
    /**
     * Instantiates a new teamwork and sets the default values.
     * @param teamworkParameterValue 
     */
    public constructor(teamworkParameterValue?: Teamwork | undefined) {
        super();
        this.workforceIntegrations = teamworkParameterValue?.workforceIntegrations ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "workforceIntegrations": n => { this.workforceIntegrations = n.getCollectionOfObjectValues<WorkforceIntegrationImpl>(createWorkforceIntegrationFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.workforceIntegrations && this.workforceIntegrations.length != 0){        const workforceIntegrationsArrValue: WorkforceIntegrationImpl[] = []; this.workforceIntegrations?.forEach(element => {workforceIntegrationsArrValue.push(new WorkforceIntegrationImpl(element));});
        writer.writeCollectionOfObjectValues<WorkforceIntegrationImpl>("workforceIntegrations", workforceIntegrationsArrValue);
        }
    };
}
