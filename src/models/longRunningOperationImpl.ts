import {EntityImpl} from './index';
import {LongRunningOperation} from './longRunningOperation';
import {LongRunningOperationStatus} from './longRunningOperationStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to user. */
export class LongRunningOperationImpl extends EntityImpl implements LongRunningOperation, Parsable {
    /** The createdDateTime property */
    public createdDateTime?: Date | undefined;
    /** The lastActionDateTime property */
    public lastActionDateTime?: Date | undefined;
    /** The resourceLocation property */
    public resourceLocation?: string | undefined;
    /** The status property */
    public status?: LongRunningOperationStatus | undefined;
    /** The statusDetail property */
    public statusDetail?: string | undefined;
    /**
     * Instantiates a new longRunningOperation and sets the default values.
     * @param longRunningOperationParameterValue 
     */
    public constructor(longRunningOperationParameterValue?: LongRunningOperation | undefined) {
        super();
        this.createdDateTime = longRunningOperationParameterValue?.createdDateTime ;
        this.lastActionDateTime = longRunningOperationParameterValue?.lastActionDateTime ;
        this.resourceLocation = longRunningOperationParameterValue?.resourceLocation ;
        this.status = longRunningOperationParameterValue?.status ;
        this.statusDetail = longRunningOperationParameterValue?.statusDetail ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "lastActionDateTime": n => { this.lastActionDateTime = n.getDateValue(); },
            "resourceLocation": n => { this.resourceLocation = n.getStringValue(); },
            "status": n => { this.status = n.getEnumValue<LongRunningOperationStatus>(LongRunningOperationStatus); },
            "statusDetail": n => { this.statusDetail = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.lastActionDateTime){
        writer.writeDateValue("lastActionDateTime", this.lastActionDateTime);
        }
        if(this.resourceLocation){
        writer.writeStringValue("resourceLocation", this.resourceLocation);
        }
        if(this.status){
        writer.writeEnumValue<LongRunningOperationStatus>("status", this.status);
        }
        if(this.statusDetail){
        writer.writeStringValue("statusDetail", this.statusDetail);
        }
    };
}
