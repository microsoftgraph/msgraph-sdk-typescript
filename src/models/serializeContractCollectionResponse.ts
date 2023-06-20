import {Contract} from './contract';
import {ContractCollectionResponse} from './contractCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeContract} from './serializeContract';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeContractCollectionResponse(contractCollectionResponse: ContractCollectionResponse | undefined = {} as ContractCollectionResponse, writer: SerializationWriter) : void {
        serializeBaseCollectionPaginationCountResponse(writer, contractCollectionResponse)
        writer.writeCollectionOfObjectValues<Contract>("value", contractCollectionResponse.value, serializeContract);
}
