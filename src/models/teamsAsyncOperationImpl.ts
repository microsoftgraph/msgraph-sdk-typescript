import {createOperationErrorFromDiscriminatorValue} from './createOperationErrorFromDiscriminatorValue';
import {EntityImpl, OperationErrorImpl} from './index';
import {OperationError} from './operationError';
import {TeamsAsyncOperation} from './teamsAsyncOperation';
import {TeamsAsyncOperationStatus} from './teamsAsyncOperationStatus';
import {TeamsAsyncOperationType} from './teamsAsyncOperationType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class TeamsAsyncOperationImpl extends EntityImpl implements Parsable, TeamsAsyncOperation {
    /** Number of times the operation was attempted before being marked successful or failed. */
    public attemptsCount?: number | undefined;
    /** Time when the operation was created. */
    public createdDateTime?: Date | undefined;
    /** Any error that causes the async operation to fail. */
    public error_escaped?: OperationError | undefined;
    /** Time when the async operation was last updated. */
    public lastActionDateTime?: Date | undefined;
    /** Denotes the type of operation being described. */
    public operationType?: TeamsAsyncOperationType | undefined;
    /** Operation status. */
    public status?: TeamsAsyncOperationStatus | undefined;
    /** The ID of the object that's created or modified as result of this async operation, typically a team. */
    public targetResourceId?: string | undefined;
    /** The location of the object that's created or modified as result of this async operation. This URL should be treated as an opaque value and not parsed into its component paths. */
    public targetResourceLocation?: string | undefined;
    /**
     * Instantiates a new teamsAsyncOperation and sets the default values.
     * @param teamsAsyncOperationParameterValue 
     */
    public constructor(teamsAsyncOperationParameterValue?: TeamsAsyncOperation | undefined) {
        super();
        this.attemptsCount = teamsAsyncOperationParameterValue?.attemptsCount ;
        this.createdDateTime = teamsAsyncOperationParameterValue?.createdDateTime ;
        this.error_escaped = teamsAsyncOperationParameterValue?.error_escaped ;
        this.lastActionDateTime = teamsAsyncOperationParameterValue?.lastActionDateTime ;
        this.operationType = teamsAsyncOperationParameterValue?.operationType ;
        this.status = teamsAsyncOperationParameterValue?.status ;
        this.targetResourceId = teamsAsyncOperationParameterValue?.targetResourceId ;
        this.targetResourceLocation = teamsAsyncOperationParameterValue?.targetResourceLocation ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "attemptsCount": n => { this.attemptsCount = n.getNumberValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "error": n => { this.error_escaped = n.getObjectValue<OperationErrorImpl>(createOperationErrorFromDiscriminatorValue); },
            "lastActionDateTime": n => { this.lastActionDateTime = n.getDateValue(); },
            "operationType": n => { this.operationType = n.getEnumValue<TeamsAsyncOperationType>(TeamsAsyncOperationType); },
            "status": n => { this.status = n.getEnumValue<TeamsAsyncOperationStatus>(TeamsAsyncOperationStatus); },
            "targetResourceId": n => { this.targetResourceId = n.getStringValue(); },
            "targetResourceLocation": n => { this.targetResourceLocation = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.attemptsCount){
        writer.writeNumberValue("attemptsCount", this.attemptsCount);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.error_escaped){
        writer.writeObjectValue<OperationErrorImpl>("error", new OperationErrorImpl(this.error_escaped));
        }
        if(this.lastActionDateTime){
        writer.writeDateValue("lastActionDateTime", this.lastActionDateTime);
        }
        if(this.operationType){
        writer.writeEnumValue<TeamsAsyncOperationType>("operationType", this.operationType);
        }
        if(this.status){
        writer.writeEnumValue<TeamsAsyncOperationStatus>("status", this.status);
        }
        if(this.targetResourceId){
        writer.writeStringValue("targetResourceId", this.targetResourceId);
        }
        if(this.targetResourceLocation){
        writer.writeStringValue("targetResourceLocation", this.targetResourceLocation);
        }
    };
}
