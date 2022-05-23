import {CommsOperation} from './commsOperation';
import {createResultInfoFromDiscriminatorValue} from './createResultInfoFromDiscriminatorValue';
import {EntityImpl, ResultInfoImpl} from './index';
import {OperationStatus} from './operationStatus';
import {ResultInfo} from './resultInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class CommsOperationImpl extends EntityImpl implements CommsOperation, Parsable {
    /** Unique Client Context string. Max limit is 256 chars. */
    public clientContext?: string | undefined;
    /** The result information. Read-only. */
    public resultInfo?: ResultInfo | undefined;
    /** Possible values are: notStarted, running, completed, failed. Read-only. */
    public status?: OperationStatus | undefined;
    /**
     * Instantiates a new commsOperation and sets the default values.
     * @param commsOperationParameterValue 
     */
    public constructor(commsOperationParameterValue?: CommsOperation | undefined) {
        super();
        this.clientContext = commsOperationParameterValue?.clientContext ;
        this.resultInfo = commsOperationParameterValue?.resultInfo ;
        this.status = commsOperationParameterValue?.status ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "clientContext": n => { this.clientContext = n.getStringValue(); },
            "resultInfo": n => { this.resultInfo = n.getObjectValue<ResultInfoImpl>(createResultInfoFromDiscriminatorValue); },
            "status": n => { this.status = n.getEnumValue<OperationStatus>(OperationStatus); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.clientContext){
        writer.writeStringValue("clientContext", this.clientContext);
        }
        if(this.resultInfo){
        writer.writeObjectValue<ResultInfoImpl>("resultInfo", new ResultInfoImpl(this.resultInfo));
        }
        if(this.status){
        writer.writeEnumValue<OperationStatus>("status", this.status);
        }
    };
}
