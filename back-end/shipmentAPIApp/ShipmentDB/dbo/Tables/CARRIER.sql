﻿CREATE TABLE [dbo].[CARRIER](
	[carrier_id] [int] NOT NULL,
	[carrier_name] [varchar](100) NOT NULL,
	[carrier_mode] [varchar](25) NOT NULL,
 CONSTRAINT [PK_CARRIER] PRIMARY KEY CLUSTERED 
(
	[carrier_id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]